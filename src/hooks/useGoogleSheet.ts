import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import type { Type } from "./useGoogleSheetMutation";

const ID =
  "AKfycbxVqSYSJENG7nglZREGSpEkkDE-ydm-41CBGInq11AhpnMPxrFZZBRuSASotT8aK-GYOg";
export const BASE_URL = `https://script.google.com/macros/s/${ID}/exec`;

export function useGoogleSheetData<T = unknown>(type: Type) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchSheetData = useCallback(async () => {
    if (!type) return;
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get<T[]>(`${BASE_URL}?type=${type}`);
      setData(res.data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("Unknown error occurred"));
      }
    } finally {
      setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    fetchSheetData();
  }, [fetchSheetData]);

  return { data, loading, error, refetch: fetchSheetData };
}
