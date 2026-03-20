import { NextRequest, NextResponse } from "next/server";
import { model } from "@/lib/gemini";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body: { review: string } = await req.json();
    const { review } = body;

    const prompt = `
You are an AI that analyzes ecommerce reviews.

Return ONLY JSON in this format:
{
  "sentiment": "Positive | Neutral | Negative",
  "issues": ["Delivery", "Quality", "Packaging", "Price"]
}

Rules:
- Be concise
- No explanation
- Only valid JSON

Review:
"${review}"
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Extract JSON safely
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : null;

    return NextResponse.json({
      success: true,
      data: parsed,
    });
  } catch (error) {
    console.error("AI error:", error);

    return NextResponse.json(
      { success: false, error: "AI analysis failed" },
      { status: 500 }
    );
  }
}