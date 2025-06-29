import { supabase } from "@/lib/supabase-server";
import { NextResponse } from "next/server";

interface Payload {
  email?: string;
}

// Regex: very lenient but catches obvious mistakes
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json()) as Payload;
  const email = body.email?.trim().toLowerCase();

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  try {
    // Upsert to avoid duplicates. Requires a unique constraint on email column.
    const { error } = await supabase
      .from("alpha_signups")
      .upsert({ email }, { onConflict: "email" });

    if (error) {
      console.error("Supabase insert error", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unhandled subscribe error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
