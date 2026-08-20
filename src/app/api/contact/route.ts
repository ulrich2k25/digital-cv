import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Felder aus." },
        { status: 400 },
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL;

    if (!contactEmail) {
      return NextResponse.json(
        { error: "Kontakt-E-Mail ist nicht konfiguriert." },
        { status: 500 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Digital CV <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `Portfolio Kontakt: ${subject}`,
      text: `
Name: ${name}
E-Mail: ${email}

Nachricht:
${message}
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: "Die Nachricht konnte nicht gesendet werden." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Nachricht erfolgreich gesendet.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Ein unerwarteter Fehler ist aufgetreten." },
      { status: 500 },
    );
  }
}
