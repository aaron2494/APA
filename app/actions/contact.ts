"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
}

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name") as string
  const company = formData.get("company") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return { status: "error", message: "Completá los campos requeridos." }
  }

  try {
    await resend.emails.send({
      from: "APA Web <onboarding@resend.dev>",
      to: ["hola@agenciapaliza.com"],
      replyTo: email,
      subject: `Nuevo contacto de ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c0001a;">Nuevo mensaje desde la web</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">Nombre</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            ${company ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Empresa</td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p style="color: #333; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    return { status: "success" }
  } catch (error) {
    console.error("[Resend] Error sending email:", error)
    return {
      status: "error",
      message: "No pudimos enviar tu mensaje. Intentá de nuevo más tarde.",
    }
  }
}
