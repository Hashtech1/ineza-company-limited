import { Area, AreaChart as ReAreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartPoint } from "@/types/dashboard.types";

export const AreaChart = ({ data, color = "#4A7F3D" }: { data: ChartPoint[]; color?: string }) => (
  <ResponsiveContainer width="100%" height={280}>
    <ReAreaChart data={data}>
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={color} stopOpacity={0.3} />
          <stop offset="95%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="#10181510" />
      <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#10181580" }} axisLine={false} tickLine={false} />
      <YAxis tick={{ fontSize: 12, fill: "#10181580" }} axisLine={false} tickLine={false} />
      <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #10181515" }} />
      <Area type="monotone" dataKey="value" stroke={color} fill="url(#areaFill)" strokeWidth={2.5} />
    </ReAreaChart>
  </ResponsiveContainer>
);
