import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "./useGoogleSheet";
type Type = "products" | "contacts" | "works" | "login";
type Method = "POST" | "PUT" | "DELETE";
interface MutationOptions<T> {
  type: Type;
  method: Method;
  payload?: T;
  id?: string;
}

export function useGoogleSheetMutation() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const mutate = async <T = unknown>(options: MutationOptions<T>) => {
    const { type, method, payload, id } = options;
    setLoading(true);
    setError(null);
    try {
      const apiKey = localStorage.getItem("apiKey");
      const config = {
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        params: { type, apiKey, ...(id ? { id } : {}), method },
      };
      const res = await axios({
        method: "POST",
        url: BASE_URL,
        data: JSON.stringify(payload),
        ...config,
      });
      return res?.data;
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
        throw err;
      } else {
        const unknownError = new Error("Unknown error");
        setError(unknownError);
        throw unknownError;
      }
    } finally {
      setLoading(false);
    }
  };
  return { mutate, loading, error };
}
