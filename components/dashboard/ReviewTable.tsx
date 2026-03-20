"use client";

import { useState } from "react";
import { Review } from "@/types/review";
import { getSentiment, getIssueTags } from "@/lib/utils";

type AiResult = {
  sentiment?: string;
  issues?: string[];
};

export default function ReviewTable({ reviews }: { reviews: Review[] }) {
  const [aiResults, setAiResults] = useState<Record<number, AiResult>>({});

  const handleAnalyze = async (reviewId: number, text: string) => {
    const res = await fetch("/api/analyze", {
      method: "POST",
      body: JSON.stringify({ review: text }),
    });

    const data = await res.json();

    setAiResults((prev) => ({
      ...prev,
      [reviewId]: data.data,
    }));
  };

  return (
    <div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-zinc-50 border-b border-zinc-200 text-xs font-semibold tracking-wide text-zinc-500 uppercase">
          <tr>
            <th className="px-6 py-4 border-b border-zinc-200">Product</th>
            <th className="px-6 py-4 border-b border-zinc-200">Platform</th>
            <th className="px-6 py-4 border-b border-zinc-200">Rating</th>
            <th className="px-6 py-4 border-b border-zinc-200">Sentiment</th>
            <th className="px-6 py-4 border-b border-zinc-200">Issues</th>
            <th className="px-6 py-4 border-b border-zinc-200">Review</th>
            <th className="px-6 py-4 border-b border-zinc-200">Analyze</th>
            <th className="px-6 py-4 border-b border-zinc-200">Date</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((review) => {
            const ai = aiResults[review.id];

            const sentiment = ai?.sentiment || getSentiment(review.rating);
            const issues = ai?.issues || getIssueTags(review.review_text);

            return (
              <tr
                key={review.id}
                className="border-b border-zinc-100 hover:bg-zinc-50/80 transition-colors"
              >
                <td className="px-6 py-5 text-zinc-700">{review.product}</td>
                <td className="px-6 py-5 text-zinc-700">{review.platform}</td>

                <td className="px-6 py-5 font-medium text-zinc-900">{review.rating} ⭐</td>

                {/* Sentiment */}
                <td className="px-6 py-5">
                  <span
                    className="border border-zinc-200 bg-zinc-50 text-zinc-700 px-2.5 py-1 rounded-md text-xs font-medium"
                  >
                    {sentiment}
                  </span>
                </td>

                {/* Issues */}
                <td className="px-6 py-5">
                  <div className="flex gap-2 flex-wrap">
                    {issues.length > 0 ? (
                      issues.map((tag, index) => (
                        <span
                          key={index}
                          className="border border-zinc-200 bg-zinc-50 text-zinc-700 px-2.5 py-1 rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-zinc-400 text-sm">None</span>
                    )}
                  </div>
                </td>

                <td className="px-6 py-5 max-w-xs truncate text-zinc-600">{review.review_text}</td>

                <td className="px-6 py-5">
                  <button
                    className="bg-zinc-900 text-white hover:bg-zinc-800 hover:-translate-y-0.5 transition-all shadow-md rounded-lg px-4 py-2 text-xs font-medium inline-block"
                    onClick={() => handleAnalyze(review.id, review.review_text)}
                  >
                    Analyze
                  </button>
                </td>

                <td className="px-6 py-5 text-sm text-zinc-500">
                  {new Date(review.created_at).toLocaleDateString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}