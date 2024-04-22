import { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { useCallback, useState } from "react";

type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

export type UseAxiosFunction = (
  url: string,
  options?: AxiosRequestConfig,
) => Promise<AxiosResponse<unknown>>;

export function useRestClient(
  method: HttpMethod,
): [UseAxiosFunction, Record<string, unknown>, boolean, unknown] {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const request = useCallback(
    async (url: string, options?: AxiosRequestConfig) => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios({ method, url, ...options });
        setLoading(false);
        setData(response.data || {});
        return response;
      } catch (err) {
        setLoading(false);
        setError(err);
        throw err;
      }
    },
    [method],
  );

  return [request, data, loading, error];
}
