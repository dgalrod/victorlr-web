import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const { name, email, eventType, message } = await req.json();

    if (!name || !email || !eventType || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 },
      );
    }

    // TODO: cambiar — email de destino y from
    const toEmail = process.env.CONTACT_EMAIL || "info@victorlr.com";

    const resend = getResendClient();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: toEmail,
      subject: `Nuevo contacto: ${eventType} — ${name}`,
      replyTo: email,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tipo de evento:</strong> ${eventType}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 },
    );
  }
}
