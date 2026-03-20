export interface Review {
  id: number;
  product: string;
  platform: string;
  rating: number;
  review_text: string;
  created_at: string;
}

export interface Filters {
  rating: string;
  product: string;
  platform: string;
}
export interface Analytics {
  total_reviews: number;
  average_rating: number;
  distribution: {
    rating: number;
    count: number;
  }[];
}