import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
});

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Required infomation not provided" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      "INSERT INTO lead_message (name, email, ,company, message) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, company, message ?? false]
    );

    return NextResponse.json({ message: result.rows[0] });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
