import { Badge } from "@/components/ui/badge";
import type { NoteType } from "@/types/api";

const config: Record<NoteType, { label: string; variant: "default" | "secondary" | "outline" }> = {
  PRIVATE_DIRECTIVE: { label: "Private", variant: "default" },
  PUBLIC_DIRECTIVE: { label: "Public", variant: "outline" },
};

export function NoteTypeBadge({ noteType }: { noteType: NoteType }) {
  const { label, variant } = config[noteType];
  return <Badge variant={variant}>{label} Directive</Badge>;
}
