"use client";

import { Cell, Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import type { PriorityCount } from "@/types/api";

const COLORS: Record<string, string> = {
  HIGH: "var(--chart-1)",
  MEDIUM: "var(--chart-4)",
  LOW: "var(--chart-2)",
};

const chartConfig: ChartConfig = {
  HIGH: { label: "High", color: "var(--chart-1)" },
  MEDIUM: { label: "Medium", color: "var(--chart-4)" },
  LOW: { label: "Low", color: "var(--chart-2)" },
};

export function PriorityDistributionChart({ data }: { data: PriorityCount[] }) {
  const chartData = data.map((d) => ({ name: d.priority, value: d.count }));

  if (data.length === 0 || data.every((d) => d.count === 0)) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Priority Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground py-8 text-center text-sm">No data yet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Priority Distribution</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <ChartContainer config={chartConfig} className="h-52 w-52">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={2}
            >
              {chartData.map((entry) => (
                <Cell key={entry.name} fill={COLORS[entry.name] ?? "var(--chart-3)"} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
        <div className="mt-2 flex gap-4">
          {data.map((d) => (
            <div key={d.priority} className="flex items-center gap-1.5 text-xs">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ background: COLORS[d.priority] ?? "var(--chart-3)" }}
              />
              {d.priority[0] + d.priority.slice(1).toLowerCase()} ({d.count})
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
