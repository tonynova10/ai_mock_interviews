"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartConfig = {
  score: {
    label: "Score",
    color: "#6f2da8",
  },
  comSkills: {
    label: "Communication",
    color: "#4d01a6"
  },
  techKnowledge: {
    label: "Technical Knowledge",
    color: "#9B59B6"
  },
  probSolving: {
    label: "Problem Solving",
    color: "#502A6F"
  },
  culturalFit: {
    label: "Cultural Fit",
    color: "#d3bbe6"
  },
  cAndC: {
    label: "Confidence & Clarity",
    color: "#eddde3"
  }
} satisfies ChartConfig;

const StatsChart = ({ tableData }: TableDataProps) => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={tableData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="try"
          tickLine={false}
          tickMargin={15}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="score" fill="var(--color-score)" radius={4} />
        <Bar dataKey="comSkills" fill="var(--color-comSkills)" radius={4} />
        <Bar dataKey="techKnowledge" fill="var(--color-techKnowledge)" radius={4} />
        <Bar dataKey="probSolving" fill="var(--color-probSolving)" radius={4} />
        <Bar dataKey="culturalFit" fill="var(--color-culturalFit)" radius={4} />
        <Bar dataKey="cAndC" fill="var(--color-cAndC)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default StatsChart;
