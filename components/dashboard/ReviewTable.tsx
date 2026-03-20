import { Review } from "@/types/review";

export default function ReviewTable({ reviews }: { reviews: Review[] }) {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Product</th>
            <th className="p-3">Platform</th>
            <th className="p-3">Rating</th>
            <th className="p-3">Review</th>
            <th className="p-3">Date</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((review) => (
            <tr key={review.id} className="border-t">
              <td className="p-3">{review.product}</td>
              <td className="p-3">{review.platform}</td>
              <td className="p-3">{review.rating} ⭐</td>
              <td className="p-3">{review.review_text}</td>
              <td className="p-3">
                {new Date(review.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}