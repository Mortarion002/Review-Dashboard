import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const rating = searchParams.get("rating");
    const product = searchParams.get("product");
    const platform = searchParams.get("platform");

    const ratingVal = rating ? Number(rating) : null;
    const productVal = product || null;
    const platformVal = platform || null;

    const result = await sql`
      SELECT * FROM reviews 
      WHERE (${ratingVal}::int IS NULL OR rating = ${ratingVal})
        AND (${productVal}::text IS NULL OR product = ${productVal})
        AND (${platformVal}::text IS NULL OR platform = ${platformVal})
      ORDER BY created_at DESC
    `;

    return NextResponse.json({
      success: true,
      count: result.length,
      data: result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}