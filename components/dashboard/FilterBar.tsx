type Props = {
  filters: {
    rating: string;
    product: string;
    platform: string;
  };
  setFilters: (filters: any) => void;
};

export default function FilterBar({ filters, setFilters }: Props) {
  return (
    <div className="flex gap-4 flex-wrap">
      <select
        className="border p-2 rounded"
        value={filters.rating}
        onChange={(e) =>
          setFilters({ ...filters, rating: e.target.value })
        }
      >
        <option value="">All Ratings</option>
        <option value="5">5 ⭐</option>
        <option value="4">4 ⭐</option>
        <option value="3">3 ⭐</option>
        <option value="2">2 ⭐</option>
        <option value="1">1 ⭐</option>
      </select>

      <select
        className="border p-2 rounded"
        value={filters.platform}
        onChange={(e) =>
          setFilters({ ...filters, platform: e.target.value })
        }
      >
        <option value="">All Platforms</option>
        <option value="Amazon">Amazon</option>
        <option value="Flipkart">Flipkart</option>
        <option value="Shopify">Shopify</option>
      </select>

      <input
        type="text"
        placeholder="Search product..."
        className="border p-2 rounded"
        value={filters.product}
        onChange={(e) =>
          setFilters({ ...filters, product: e.target.value })
        }
      />
    </div>
  );
}