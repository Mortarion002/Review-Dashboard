"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: {
    rating: number;
    count: number;
  }[];
};

export default function Charts({ data }: Props) {
  return (
    <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-zinc-900 mb-6">Rating Distribution</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="rating" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#18181b" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}