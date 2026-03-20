type Props = {
  total: number;
  avgRating: number;
};

export default function AnalyticsCards({ total, avgRating }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6">
        <h2 className="text-sm font-medium text-zinc-500">Total Reviews</h2>
        <p className="text-2xl font-bold text-zinc-900">{total}</p>
      </div>

      <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6">
        <h2 className="text-sm font-medium text-zinc-500">Average Rating</h2>
        <p className="text-2xl font-bold text-zinc-900">{avgRating} ⭐</p>
      </div>

    </div>
  );
}