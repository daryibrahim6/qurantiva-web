import nodemailer from "nodemailer";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendRegistrationEmail(data: {
  nama: string;
  whatsapp: string;
  tanggalLahir: string;
  pekerjaan: string;
  asalKota: string;
  paket: string;
}) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const safe = {
    nama: escapeHtml(data.nama),
    whatsapp: escapeHtml(data.whatsapp),
    tanggalLahir: escapeHtml(data.tanggalLahir),
    pekerjaan: escapeHtml(data.pekerjaan),
    asalKota: escapeHtml(data.asalKota),
    paket: escapeHtml(data.paket),
  };

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #0f766e; margin-bottom: 20px;">Pendaftaran Baru Qurantiva</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 150px;">Nama Lengkap</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${safe.nama}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">WhatsApp/HP</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${safe.whatsapp}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Tanggal Lahir</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${safe.tanggalLahir}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Pekerjaan</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${safe.pekerjaan}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Asal Kota</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${safe.asalKota}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Paket</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${safe.paket}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
        Email ini dikirim otomatis dari form pendaftaran website Qurantiva.
      </p>
    </div>
  `;

  const sanitize = (str: string) => str.replace(/[\r\n]/g, "");

  await transporter.sendMail({
    from: `Qurantiva <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `Pendaftaran Baru - ${sanitize(data.nama)} - ${sanitize(data.paket)}`,
    html,
  });
}
