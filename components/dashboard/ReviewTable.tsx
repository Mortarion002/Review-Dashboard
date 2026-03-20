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
    <div className="overflow-x-auto border rounded-lg">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Product</th>
            <th className="p-3">Platform</th>
            <th className="p-3">Rating</th>
            <th className="p-3">Sentiment</th>
            <th className="p-3">Issues</th>
            <th className="p-3">Review</th>
            <th className="p-3">Analyze</th>
            <th className="p-3">Date</th>
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
                className={`border-t hover:bg-gray-50 transition ${review.rating <= 2 ? "bg-red-50" : ""
                  }`}
              >
                <td className="p-3">{review.product}</td>
                <td className="p-3">{review.platform}</td>

                <td className="p-3">{review.rating} ⭐</td>

                {/* Sentiment */}
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm ${sentiment === "Positive"
                      ? "bg-green-100 text-green-700"
                      : sentiment === "Neutral"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                      }`}
                  >
                    {sentiment}
                  </span>
                </td>

                {/* Issues */}
                <td className="p-3">
                  <div className="flex gap-2 flex-wrap">
                    {issues.length > 0 ? (
                      issues.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-200 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-400 text-sm">None</span>
                    )}
                  </div>
                </td>

                <td className="p-3 max-w-xs truncate">{review.review_text}</td>

                <td className="p-3">
                  <button
                    className="text-blue-500 text-sm"
                    onClick={() => handleAnalyze(review.id, review.review_text)}
                  >
                    Analyze
                  </button>
                </td>

                <td className="p-3">
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