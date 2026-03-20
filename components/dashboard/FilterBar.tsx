import { Filters } from "@/types/review";

type Props = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export default function FilterBar({ filters, setFilters }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4 flex-wrap">
      {/* Rating */}
      <div className="flex flex-col">
        <label htmlFor="rating" className="text-sm">Rating</label>
        <select
          id="rating"
          className="border p-2 rounded"
          value={filters.rating}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, rating: e.target.value }))
          }
        >
          <option value="">All Ratings</option>
          <option value="5">5 ⭐</option>
          <option value="4">4 ⭐</option>
          <option value="3">3 ⭐</option>
          <option value="2">2 ⭐</option>
          <option value="1">1 ⭐</option>
        </select>
      </div>

      {/* Platform */}
      <div className="flex flex-col">
        <label htmlFor="platform" className="text-sm">Platform</label>
        <select
          id="platform"
          className="border p-2 rounded"
          value={filters.platform}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, platform: e.target.value }))
          }
        >
          <option value="">All Platforms</option>
          <option value="Amazon">Amazon</option>
          <option value="Flipkart">Flipkart</option>
          <option value="Shopify">Shopify</option>
        </select>
      </div>

      {/* Product */}
      <div className="flex flex-col">
        <label htmlFor="product" className="text-sm">Product</label>
        <input
          id="product"
          type="text"
          placeholder="Search product..."
          className="border p-2 rounded"
          value={filters.product}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, product: e.target.value }))
          }
        />
      </div>
    </div>
  );
}