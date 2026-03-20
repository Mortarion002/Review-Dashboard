mkdir -p components/dashboard
mkdir -p components/ui
mkdir -p lib
mkdir -p types
mkdir -p scripts

mkdir -p app/api/reviews
mkdir -p app/api/analytics
mkdir -p app/api/analyze

touch lib/db.ts
touch lib/queries.ts
touch lib/gemini.ts

touch types/review.ts
touch scripts/seed.ts

touch app/api/reviews/route.ts
touch app/api/analytics/route.ts
touch app/api/analyze/route.ts

touch components/dashboard/ReviewTable.tsx
touch components/dashboard/FilterBar.tsx
touch components/dashboard/AnalyticsCards.tsx
touch components/dashboard/Charts.tsx
touch components/dashboard/Summary.tsx