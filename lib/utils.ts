export function getSentiment(rating: number): "Positive" | "Neutral" | "Negative" {
  if (rating >= 4) return "Positive";
  if (rating === 3) return "Neutral";
  return "Negative";
}

export function getIssueTags(review: string): string[] {
  const text = review.toLowerCase();

  const tags: string[] = [];

  if (text.includes("late") || text.includes("delivery")) {
    tags.push("Delivery");
  }

  if (text.includes("broken") || text.includes("quality")) {
    tags.push("Quality");
  }

  if (text.includes("packaging")) {
    tags.push("Packaging");
  }

  if (text.includes("expensive") || text.includes("price")) {
    tags.push("Price");
  }

  if (tags.length === 0) tags.push("General");

  return tags;
}