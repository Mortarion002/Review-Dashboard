"use client";

import { Filters } from "@/types/review";

type Props = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export default function FilterBar({ filters, setFilters }: Props) {
  return (
    <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6 flex flex-col md:flex-row gap-6">
      {/* Rating */}
      <div className="flex flex-col">
        <label htmlFor="rating" className="text-sm font-medium text-zinc-700 mb-1.5">Rating</label>
        <select
          id="rating"
          className="border border-zinc-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 transition-all text-zinc-900 bg-zinc-50 hover:bg-white"
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
        <label htmlFor="platform" className="text-sm font-medium text-zinc-700 mb-1.5">Platform</label>
        <select
          id="platform"
          className="border border-zinc-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 transition-all text-zinc-900 bg-zinc-50 hover:bg-white"
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
        <label htmlFor="product" className="text-sm font-medium text-zinc-700 mb-1.5">Product</label>
        <input
          id="product"
          type="text"
          placeholder="Search product..."
          className="border border-zinc-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 transition-all text-zinc-900 bg-zinc-50 hover:bg-white"
          value={filters.product}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, product: e.target.value }))
          }
        />
      </div>
    </div>
  );
}