"use client";

import { useEffect, useState } from "react";
import ReviewTable from "@/components/dashboard/ReviewTable";
import FilterBar from "@/components/dashboard/FilterBar";
import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import Charts from "@/components/dashboard/Charts";

import { Review, Filters } from "@/types/review";

export default function DashboardPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [analytics, setAnalytics] = useState<any>(null);

  const [filters, setFilters] = useState<Filters>({
    rating: "",
    product: "",
    platform: "",
  });

  // Fetch Reviews
  useEffect(() => {
    const fetchReviews = async () => {
      const params = new URLSearchParams();

      if (filters.rating) params.append("rating", filters.rating);
      if (filters.product) params.append("product", filters.product);
      if (filters.platform) params.append("platform", filters.platform);

      const res = await fetch(`/api/reviews?${params.toString()}`);
      const data = await res.json();

      setReviews(data.data || []);
    };

    fetchReviews();
  }, [filters]);

  // Fetch Analytics
  useEffect(() => {
    const fetchAnalytics = async () => {
      const res = await fetch("/api/analytics");
      const data = await res.json();
      setAnalytics(data.data);
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Review Dashboard</h1>

      {/* Analytics */}
      {analytics && (
        <>
          <AnalyticsCards
            total={Number(analytics.total_reviews)}
            avgRating={Number(analytics.average_rating)}
          />

          <Charts data={analytics.distribution || []} />
        </>
      )}

      {/* Filters */}
      <FilterBar filters={filters} setFilters={setFilters} />

      {/* Table */}
      <ReviewTable reviews={reviews} />
    </div>
  );
}