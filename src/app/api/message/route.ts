import { NextResponse } from "next/server";
import { Pool } from "pg";
import verifyCaptcha from "../lib/verifyCaptcha";
import ratelimit from "../lib/ratelimit";

const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const ip = req.headers.get("x-forwarded-for") ?? "anonymous";

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Required infomation not provided" },
        { status: 400 }
      );
    }

    await verifyCaptcha(body.token, ip);
    await ratelimit(ip);

    const result = await pool.query(
      "INSERT INTO lead_message (name, email, company, message) VALUES ($1, $2, $3, $4) RETURNING *",
      [body.name, body.email, body.company, body.message ?? false]
    );

    return NextResponse.json({ message: result.rows[0] });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
