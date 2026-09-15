"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { staffNotesService } from "@/services/staffNotes";
import type { StaffNoteCreate, StaffNoteUpdate } from "@/types/api";

export function useStaffNotes(periodId: number | null) {
  return useQuery({
    queryKey: ["staff-notes", periodId],
    queryFn: () => staffNotesService.list(periodId!),
    enabled: !!periodId,
  });
}

export function useCreateStaffNote() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: StaffNoteCreate) => staffNotesService.create(body),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["staff-notes"] });
      toast.success("Staff note added.");
    },
    onError: (err: Error) => toast.error(err.message || "Failed to add staff note."),
  });
}

export function useUpdateStaffNote() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, body }: { id: number; body: StaffNoteUpdate }) =>
      staffNotesService.update(id, body),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["staff-notes"] });
      toast.success("Staff note updated.");
    },
    onError: (err: Error) => toast.error(err.message || "Failed to update staff note."),
  });
}

export function useDeleteStaffNote() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => staffNotesService.delete(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["staff-notes"] });
      toast.success("Staff note deleted.");
    },
    onError: (err: Error) => toast.error(err.message || "Failed to delete staff note."),
  });
}
