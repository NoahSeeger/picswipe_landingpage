import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // E-Mail in die Datenbank eintragen
    const { error } = await supabase.from("waitlist").insert([{ email }]);

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    return NextResponse.json({ message: "Successfully joined waitlist!" });
  } catch {
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
