import { Cell, Pie, PieChart as RePieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { ChartPoint } from "@/types/dashboard.types";

const COLORS = ["#1D331A", "#4A7F3D", "#93BC88", "#D68A3C", "#E2A25B"];

export const PieChart = ({ data }: { data: ChartPoint[] }) => (
  <ResponsiveContainer width="100%" height={280}>
    <RePieChart>
      <Pie data={data} dataKey="value" nameKey="label" cx="50%" cy="50%" outerRadius={90} innerRadius={55}>
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #10181515" }} />
      <Legend />
    </RePieChart>
  </ResponsiveContainer>
);
