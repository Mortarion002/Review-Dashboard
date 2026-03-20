import { Review } from "@/types/review";
import { getSentiment, getIssueTags } from "@/lib/utils";

export default function ReviewTable({ reviews }: { reviews: Review[] }) {
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
            <th className="p-3">Date</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((review) => {
            const sentiment = getSentiment(review.rating);
            const issues = getIssueTags(review.review_text);

            return (
              <tr
                key={review.id}
                className={`border-t ${
                  review.rating <= 2 ? "bg-red-50" : ""
                }`}
              >
                <td className="p-3">{review.product}</td>
                <td className="p-3">{review.platform}</td>

                <td className="p-3">{review.rating} ⭐</td>

                {/* Sentiment */}
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      sentiment === "Positive"
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

                <td className="p-3">{review.review_text}</td>

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