import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
});

export async function POST(req: Request) {
  try {
    const { email, consent } = await req.json();

    if (!email || !consent) {
      return NextResponse.json(
        { error: "Required infomation not provided" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      "INSERT INTO waitlist_subs (email, consent) VALUES ($1, $2) RETURNING *",
      [email, consent ?? false]
    );

    return NextResponse.json({ subscriber: result.rows[0] });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
