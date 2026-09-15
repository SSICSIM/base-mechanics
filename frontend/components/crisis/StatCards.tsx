import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AnalyticsSummary } from "@/types/api";

export function StatCards({ summary }: { summary: AnalyticsSummary }) {
  const high = summary.priority_distribution.find((p) => p.priority === "HIGH")?.count ?? 0;
  const medium = summary.priority_distribution.find((p) => p.priority === "MEDIUM")?.count ?? 0;
  const low = summary.priority_distribution.find((p) => p.priority === "LOW")?.count ?? 0;

  const stats = [
    { label: "Total Notes", value: summary.total_notes, color: "text-foreground" },
    { label: "High Priority", value: high, color: "text-destructive" },
    { label: "Medium Priority", value: medium, color: "text-amber-500" },
    { label: "Low Priority", value: low, color: "text-muted-foreground" },
    { label: "Private Directives", value: summary.private_directive_count, color: "text-foreground" },
    { label: "Public Directives", value: summary.public_directive_count, color: "text-foreground" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {stats.map((s) => (
        <Card key={s.label}>
          <CardHeader className="pb-1 pt-4">
            <CardTitle className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
              {s.label}
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
