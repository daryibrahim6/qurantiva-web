import { NextRequest, NextResponse } from "next/server";
import { sendRegistrationEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.nama || !data.whatsapp || !data.paket) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
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
