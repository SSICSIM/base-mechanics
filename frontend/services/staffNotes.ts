import { apiClient } from "@/lib/apiClient";
import type { StaffNoteCreate, StaffNoteResponse, StaffNoteUpdate } from "@/types/api";

export const staffNotesService = {
  list: (periodId: number) =>
    apiClient.get<StaffNoteResponse[]>(`/api/staff-notes?period_id=${periodId}`),

  create: (body: StaffNoteCreate) => apiClient.post<StaffNoteResponse>("/api/staff-notes", body),

  update: (id: number, body: StaffNoteUpdate) =>
    apiClient.patch<StaffNoteResponse>(`/api/staff-notes/${id}`, body),

  delete: (id: number) => apiClient.delete<void>(`/api/staff-notes/${id}`),
};
