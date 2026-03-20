type Props = {
  total: number;
  avgRating: number;
};

export default function AnalyticsCards({ total, avgRating }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      <div className="p-4 border rounded-lg shadow-sm">
        <h2 className="text-sm text-gray-500">Total Reviews</h2>
        <p className="text-2xl font-bold">{total}</p>
      </div>

      <div className="p-4 border rounded-lg shadow-sm">
        <h2 className="text-sm text-gray-500">Average Rating</h2>
        <p className="text-2xl font-bold">{avgRating} ⭐</p>
      </div>

    </div>
  );
}