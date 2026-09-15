import { Badge } from "@/components/ui/badge";
import type { Priority } from "@/types/api";

const config: Record<Priority, { label: string; className: string }> = {
  HIGH: { label: "High", className: "bg-destructive text-destructive-foreground hover:bg-destructive/90" },
  MEDIUM: { label: "Medium", className: "bg-amber-500 text-white hover:bg-amber-500/90" },
  LOW: { label: "Low", className: "" },
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  const { label, className } = config[priority];
  return (
    <Badge variant={priority === "LOW" ? "secondary" : "default"} className={className}>
      {label}
    </Badge>
  );
}
