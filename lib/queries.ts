import sql from "@/lib/db";

export async function getFilteredReviews(filters: {
  rating?: number;
  product?: string;
  platform?: string;
}) {
  if (filters.rating) {
    return await sql`
      SELECT * FROM reviews 
      WHERE rating = ${filters.rating}
      ORDER BY created_at DESC
    `;
  }

  if (filters.product) {
    return await sql`
      SELECT * FROM reviews 
      WHERE product = ${filters.product}
      ORDER BY created_at DESC
    `;
  }

  if (filters.platform) {
    return await sql`
      SELECT * FROM reviews 
      WHERE platform = ${filters.platform}
      ORDER BY created_at DESC
    `;
  }

  return await sql`
    SELECT * FROM reviews 
    ORDER BY created_at DESC
  `;
}

export async function getAnalytics() {
  const result = await sql`
    SELECT 
      COUNT(*) as total_reviews,
      AVG(rating) as average_rating
    FROM reviews
  `;

  const distribution = await sql`
    SELECT 
      rating, 
      COUNT(*)::int as count
    FROM reviews
    GROUP BY rating
    ORDER BY rating ASC
  `;

  return {
    ...result[0],
    distribution
  };
}