import { NextResponse } from "next/server";
import sql from "@/lib/db";

export async function GET() {
  try {
    const result = await sql`SELECT NOW()`;

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error,
    });
  }
}