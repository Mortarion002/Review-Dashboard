import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const rating = searchParams.get("rating");
    const product = searchParams.get("product");
    const platform = searchParams.get("platform");

    let query = "SELECT * FROM reviews WHERE 1=1";
    const values: (string | number)[] = [];

    if (rating) {
      values.push(Number(rating));
      query += ` AND rating = $${values.length}`;
    }

    if (product) {
      values.push(product);
      query += ` AND product = $${values.length}`;
    }

    if (platform) {
      values.push(platform);
      query += ` AND platform = $${values.length}`;
    }

    query += " ORDER BY created_at DESC";

    const result = await sql(query as unknown as TemplateStringsArray, values);

    return NextResponse.json({
      success: true,
      count: result.length,
      data: result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      error: "Failed to fetch reviews",
    });
  }
}