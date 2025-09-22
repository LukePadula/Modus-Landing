import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";
import verifyCaptcha from "../lib/verifyCaptcha";
import ratelimit from "../lib/ratelimit";

const sql = neon(process.env.NEON_DATABASE_URL!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const ip = req.headers.get("x-forwarded-for") ?? "anonymous";

    if (!body.email || !isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "Required information not provided" },
        { status: 400 }
      );
    }

    await verifyCaptcha(body.token, ip);
    await ratelimit(ip);

    const existingResult =
      await sql`SELECT id FROM waitlist_subs WHERE email = ${body.email} LIMIT 1`;

    if (existingResult.length) {
      return NextResponse.json({ message: "Added to waitlist" });
    }
    await sql`INSERT INTO waitlist_subs (email, consent) VALUES (${body.email}, true) RETURNING *`;

    return NextResponse.json({ message: "Added to waitlist" });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
  }
}
