import { NextResponse } from "next/server";
import axios from "axios";

export default async function verifyCaptcha(token: string, ip: string) {
  if (!token) {
    return NextResponse.json({ error: "Captcha failed" }, { status: 400 });
  }

  try {
    const captchaRes = await axios.post(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: ip,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    if (!captchaRes.data.success) {
      return NextResponse.json({ error: "Captcha failed" }, { status: 400 });
    }
  } catch (err) {
    console.error("Error:", err);
  }
}
