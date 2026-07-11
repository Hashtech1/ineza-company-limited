import { CartesianGrid, Line, LineChart as ReLineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartPoint } from "@/types/dashboard.types";

export const LineChart = ({ data, color = "#D68A3C" }: { data: ChartPoint[]; color?: string }) => (
  <ResponsiveContainer width="100%" height={280}>
    <ReLineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#10181510" />
      <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#10181580" }} axisLine={false} tickLine={false} />
      <YAxis tick={{ fontSize: 12, fill: "#10181580" }} axisLine={false} tickLine={false} />
      <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #10181515" }} />
      <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2.5} dot={false} />
    </ReLineChart>
  </ResponsiveContainer>
);
