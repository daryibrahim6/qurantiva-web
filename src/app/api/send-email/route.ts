import { NextRequest, NextResponse } from "next/server";
import { sendRegistrationEmail } from "@/lib/email";

const RATE_LIMIT = new Map<string, { count: number; resetTime: number }>();
const MAX_LEN = 200;

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const limit = RATE_LIMIT.get(ip);

  if (limit && now < limit.resetTime && limit.count >= 3) {
    return NextResponse.json(
      { message: "Terlalu banyak permintaan. Coba lagi nanti." },
      { status: 429 },
    );
  }

  RATE_LIMIT.set(ip, {
    count: (limit && now < limit.resetTime ? limit.count : 0) + 1,
    resetTime: now + 5 * 60 * 1000,
  });

  try {
    const data = await request.json();

    if (
      typeof data.nama !== "string" || data.nama.length < 3 || data.nama.length > MAX_LEN ||
      typeof data.whatsapp !== "string" || data.whatsapp.length < 8 || data.whatsapp.length > 20 ||
      typeof data.paket !== "string" || data.paket.length < 1 || data.paket.length > MAX_LEN
    ) {
      return NextResponse.json(
        { message: "Data tidak valid" },
        { status: 400 },
      );
    }

    await sendRegistrationEmail(data);

    return NextResponse.json(
      { message: "Pendaftaran berhasil dikirim" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { message: "Gagal mengirim email. Silakan coba lagi." },
      { status: 500 },
    );
  }
}
