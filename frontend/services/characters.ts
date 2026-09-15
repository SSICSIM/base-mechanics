import { apiClient } from "@/lib/apiClient";
import type { BulkUploadResult, CharacterCreate, CharacterResponse } from "@/types/api";

export const charactersService = {
  list: () => apiClient.get<CharacterResponse[]>("/api/characters"),
  create: (body: CharacterCreate) => apiClient.post<CharacterResponse>("/api/characters", body),
  delete: (id: number) => apiClient.delete<void>(`/api/characters/${id}`),

  bulkUpload: async (file: File): Promise<BulkUploadResult> => {
    const form = new FormData();
    form.append("file", file);
    // Same-origin proxy route (see apiClient.ts) — not the backend directly.
    const res = await fetch("/api/backend/api/characters/bulk", {
      method: "POST",
      body: form,
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Upload failed (${res.status}): ${text}`);
    }
    return res.json();
  },
};
