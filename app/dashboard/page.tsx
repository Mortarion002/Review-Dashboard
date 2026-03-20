"use client";

import { useCallback, useEffect, useState } from "react";
import ReviewTable from "@/components/dashboard/ReviewTable";
import FilterBar from "@/components/dashboard/FilterBar";
import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import Charts from "@/components/dashboard/Charts";

import { Review, Filters } from "@/types/review";

type AnalyticsData = {
  total_reviews: number | string;
  average_rating: number | string;
  distribution?: { rating: number; count: number }[];
};

export default function DashboardPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState<Filters>({
    rating: "",
    product: "",
    platform: "",
  });

  const fetchReviews = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();

      if (filters.rating) params.append("rating", filters.rating);
      if (filters.product) params.append("product", filters.product);
      if (filters.platform) params.append("platform", filters.platform);

      const res = await fetch(`/api/reviews?${params.toString()}`);

      if (!res.ok) throw new Error("Failed to fetch reviews");

      const data = await res.json();
      setReviews(data.data || []);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [filters]);

  // Fetch Reviews
  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

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
    <div className="max-w-7xl w-full mx-auto p-6 md:p-8 space-y-8 min-h-screen bg-zinc-50">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">Review Dashboard</h1>
        <span className="text-sm font-medium text-zinc-500">AI-powered insights</span>
      </div>

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

      {loading && <p className="text-gray-500">Loading reviews...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {/* Table */}
      {!loading && reviews.length === 0 && (
        <p className="text-gray-500">No reviews found</p>
      )}

      {!loading && reviews.length > 0 && <ReviewTable reviews={reviews} />}
    </div>
  );
}