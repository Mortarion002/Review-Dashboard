# 🚀 AI-Powered Review Analytics Dashboard

> Transform thousands of scattered eCommerce reviews into actionable insights using AI.


## 📌 Project Overview

This project is a **full-stack AI-powered review analytics dashboard** built using modern web technologies. It helps eCommerce brand owners analyze large volumes of customer reviews by:

* Centralizing reviews from multiple platforms
* Extracting sentiment and issues
* Providing analytics and visual insights
* Enabling on-demand AI-powered analysis using Gemini

---

## 🎯 Problem Statement

E-commerce businesses receive **thousands of reviews across multiple platforms** like Amazon, Flipkart, and Shopify. These reviews are:

* Scattered across platforms
* Time-consuming to analyze manually
* Difficult to convert into actionable insights

This project solves that by creating a **centralized intelligence dashboard**.

---

## ✨ Features

### 📥 Review Management

* Unified dashboard for all reviews
* Filter by:

  * Rating
  * Product
  * Platform
* Search functionality

---

### 📊 Analytics Dashboard

* Total reviews count
* Average rating
* Rating distribution (charts)

---

### 🧠 Sentiment Analysis

* Rule-based sentiment classification:

  * Positive
  * Neutral
  * Negative

---

### 🏷️ Issue Tagging

Keyword-based issue detection:

* Delivery
* Quality
* Packaging
* Price

---

### 🤖 AI Integration (Gemini)

* On-demand review analysis
* Extracts:

  * Sentiment
  * Issues
* Hybrid approach:

  * Rule-based (fast, free)
  * AI-based (accurate, contextual)

---

### 🎨 UI/UX

* Modern responsive dashboard
* Landing page with SaaS-style layout
* Loading, error, and empty states
* Clean and minimal design using Tailwind CSS

---

## 🏗️ Tech Stack

### Frontend

* Next.js (App Router)
* React
* Tailwind CSS

### Backend

* Next.js API Routes

### Database

* Neon PostgreSQL (serverless)

### AI

* Google Gemini API (`@google/generative-ai`)

### Charts

* Recharts

---

## 📁 Project Structure

```
review-dashboard/
│
├── app/
│   ├── api/
│   │   ├── reviews/
│   │   ├── analytics/
│   │   └── analyze/
│   ├── dashboard/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── dashboard/
│   │   ├── ReviewTable.tsx
│   │   ├── FilterBar.tsx
│   │   ├── AnalyticsCards.tsx
│   │   ├── Charts.tsx
│   │   └── Summary.tsx
│
├── lib/
│   ├── db.ts
│   ├── queries.ts
│   ├── gemini.ts
│   └── utils.ts
│
├── types/
│   └── review.ts
│
├── scripts/
│   └── seed.ts
│
├── .env.local
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Mortarion002/review-dashboard.git
cd review-dashboard
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create `.env.local`:

```env
DATABASE_URL=your_neon_database_url
GEMINI_API_KEY=your_gemini_api_key
```

---

### 4️⃣ Setup Database (Neon)

Run this SQL in Neon:

```sql
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  product VARCHAR(255),
  platform VARCHAR(100),
  rating INT,
  review_text TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 5️⃣ Seed Data

You can insert sample data manually via Neon SQL Editor.

---

### 6️⃣ Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🔌 API Endpoints

### 📥 Get Reviews

```
GET /api/reviews
```

Supports query params:

* `rating`
* `product`
* `platform`

---

### 📊 Get Analytics

```
GET /api/analytics
```

Returns:

* Total reviews
* Average rating
* Rating distribution

---

### 🤖 Analyze Review (AI)

```
POST /api/analyze
```

Body:

```json
{
  "review": "Your review text"
}
```

Response:

```json
{
  "sentiment": "Positive",
  "issues": ["Delivery"]
}
```

---

## 🧠 Key Design Decisions

### 🔹 Hybrid AI Approach

* Rule-based system for speed and cost efficiency
* Gemini API for deeper contextual analysis

---

### 🔹 MVP-First Strategy

* Focus on core features first
* Avoid over-engineering
* Build iteratively

---

### 🔹 Serverless Architecture

* Next.js API routes
* Neon serverless PostgreSQL

---

## 🚀 Deployment

### Deploy on Vercel

```bash
npm i -g vercel
vercel
```

Add environment variables in Vercel dashboard:

* `DATABASE_URL`
* `GEMINI_API_KEY`

---

## 📈 Future Improvements

* Real-time review ingestion
* Multi-platform API integrations
* AI summary generation
* User authentication
* Saved AI insights
* Pagination and performance optimization
* Dark mode UI

---

## 🧠 Learning Outcomes

This project demonstrates:

* Full-stack development with Next.js
* Serverless database integration (Neon)
* API design and data aggregation
* AI integration using LLMs (Gemini)
* Building scalable MVP architectures
* Product thinking and feature prioritization

---

## 💬 How to Present This Project

> "I built an AI-powered review analytics dashboard using Next.js and Neon DB that centralizes reviews, provides real-time insights, and uses a hybrid AI approach for sentiment and issue detection."

---

## ⭐ Final Thoughts

This project is designed as a **production-ready MVP** with a focus on:

* Clean architecture
* Real-world usability
* Scalable design

---

## 📌 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgements

* Next.js Team
* Neon Database
* Google Gemini API
* Recharts

---

---

## 👤 Author

**GitHub:** https://github.com/Mortarion002

---
