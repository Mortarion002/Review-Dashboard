"use client";

import { useEffect, useState } from "react";
import ReviewTable from "@/components/dashboard/ReviewTable";
import FilterBar from "@/components/dashboard/FilterBar";

export default function DashboardPage() {
  const [reviews, setReviews] = useState([]);
  const [filters, setFilters] = useState({
    rating: "",
    product: "",
    platform: "",
  });

  const fetchReviews = async () => {
    const params = new URLSearchParams();

    if (filters.rating) params.append("rating", filters.rating);
    if (filters.product) params.append("product", filters.product);
    if (filters.platform) params.append("platform", filters.platform);

    const res = await fetch(`/api/reviews?${params.toString()}`);
    const data = await res.json();

    setReviews(data.data || []);
  };

  useEffect(() => {
    fetchReviews();
  }, [filters]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Review Dashboard</h1>

      <FilterBar filters={filters} setFilters={setFilters} />

      <ReviewTable reviews={reviews} />
    </div>
  );
}