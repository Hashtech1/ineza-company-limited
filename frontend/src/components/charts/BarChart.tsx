import { Bar, BarChart as ReBarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartPoint } from "@/types/dashboard.types";

export const BarChart = ({ data, color = "#4A7F3D" }: { data: ChartPoint[]; color?: string }) => (
  <ResponsiveContainer width="100%" height={280}>
    <ReBarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#10181510" />
      <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#10181580" }} axisLine={false} tickLine={false} />
      <YAxis tick={{ fontSize: 12, fill: "#10181580" }} axisLine={false} tickLine={false} />
      <Tooltip cursor={{ fill: "#4A7F3D10" }} contentStyle={{ borderRadius: 12, border: "1px solid #10181515" }} />
      <Bar dataKey="value" fill={color} radius={[6, 6, 0, 0]} />
    </ReBarChart>
  </ResponsiveContainer>
);
