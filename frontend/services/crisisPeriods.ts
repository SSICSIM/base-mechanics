import { apiClient } from "@/lib/apiClient";
import type { CrisisPeriodCreate, CrisisPeriodResponse } from "@/types/api";

export const crisisPeriodsService = {
  list: () => apiClient.get<CrisisPeriodResponse[]>("/api/periods"),
  getActive: () => apiClient.get<CrisisPeriodResponse | null>("/api/periods/active"),
  create: (body: CrisisPeriodCreate) =>
    apiClient.post<CrisisPeriodResponse>("/api/periods", body),
  archive: (id: number) =>
    apiClient.post<CrisisPeriodResponse>(`/api/periods/${id}/archive`, {}),
};
