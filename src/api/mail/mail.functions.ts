import { SERVER_ENV } from "../env/server.env";
import type { Mail, MailResponse } from "./mail.type";

export async function sendMail(mail: Mail): Promise<MailResponse> {
  const response = await fetch(
    `${SERVER_ENV.SERVER_HOST_DEV}${SERVER_ENV.END_POINTS.MAIL}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mail),
    }
  );

  if (!response.ok) {
    throw new Error("Error al enviar el correo");
  }

  const data: MailResponse = await response.json();
  return data;
}
