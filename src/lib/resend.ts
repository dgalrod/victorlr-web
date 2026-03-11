import { Resend } from "resend";

// TODO: cambiar — configurar RESEND_API_KEY en .env.local
export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set in environment variables");
  }
  return new Resend(apiKey);
}
