"use client";

import { useState } from "react";
import { Pencil, Plus, Trash2, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import {
  useStaffNotes,
  useCreateStaffNote,
  useUpdateStaffNote,
  useDeleteStaffNote,
} from "@/hooks/useStaffNotes";
import type { StaffNoteResponse } from "@/types/api";

interface Props {
  periodId: number | null;
  readOnly?: boolean;
}

export function StaffNotesPanel({ periodId, readOnly = false }: Props) {
  const { data: notes, isLoading } = useStaffNotes(periodId);
  const { mutate: create, isPending: creating } = useCreateStaffNote();
  const { mutate: update } = useUpdateStaffNote();
  const { mutate: remove } = useDeleteStaffNote();

  const [addTitle, setAddTitle] = useState("");
  const [addContent, setAddContent] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!addTitle.trim() || !addContent.trim()) return;
    create(
      { title: addTitle.trim(), content: addContent.trim() },
      {
        onSuccess: () => {
          setAddTitle("");
          setAddContent("");
          setShowForm(false);
        },
      }
    );
  }

  function startEdit(note: StaffNoteResponse) {
    setEditingId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
  }

  function saveEdit(id: number) {
    if (!editTitle.trim() || !editContent.trim()) return;
    update(
      { id, body: { title: editTitle.trim(), content: editContent.trim() } },
      { onSuccess: () => setEditingId(null) }
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-base">Staff Notes</CardTitle>
        {!readOnly && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowForm((v) => !v)}
          >
            {showForm ? (
              <>
                <X className="mr-1.5 h-3.5 w-3.5" />
                Cancel
              </>
            ) : (
              <>
                <Plus className="mr-1.5 h-3.5 w-3.5" />
                Add Note
              </>
            )}
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-3">
        {!readOnly && showForm && (
          <form onSubmit={handleAdd} className="space-y-2 rounded-lg border p-3">
            <Input
              placeholder="Note title…"
              value={addTitle}
              onChange={(e) => setAddTitle(e.target.value)}
            />
            <Textarea
              placeholder="Write your internal note…"
              rows={3}
              value={addContent}
              onChange={(e) => setAddContent(e.target.value)}
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                size="sm"
                disabled={creating || !addTitle.trim() || !addContent.trim()}
              >
                {creating ? "Saving…" : "Save Note"}
              </Button>
            </div>
          </form>
        )}

        {isLoading && (
          <div className="space-y-2">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        )}

        {!isLoading && (!notes || notes.length === 0) && (
          <p className="text-muted-foreground py-4 text-center text-sm">
            No staff notes yet.
          </p>
        )}

        {notes?.map((note) => (
          <div key={note.id} className="rounded-lg border p-3">
            {editingId === note.id ? (
              <div className="space-y-2">
                <Input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <Textarea
                  rows={3}
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    disabled={!editTitle.trim() || !editContent.trim()}
                    onClick={() => saveEdit(note.id)}
                  >
                    <Check className="mr-1 h-3.5 w-3.5" />
                    Save
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setEditingId(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{note.title}</p>
                  <p className="text-muted-foreground mt-1 whitespace-pre-wrap text-sm">
                    {note.content}
                  </p>
                  <p className="text-muted-foreground/60 mt-2 text-xs">
                    {new Date(note.created_at).toLocaleString()}
                  </p>
                </div>
                {!readOnly && (
                  <div className="flex shrink-0 gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => startEdit(note)}
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 hover:text-destructive"
                      onClick={() => remove(note.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
