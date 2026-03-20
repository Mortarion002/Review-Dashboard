import { NextResponse } from "next/server";
import { getAnalytics } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getAnalytics();

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch analytics",
    });
  }
}