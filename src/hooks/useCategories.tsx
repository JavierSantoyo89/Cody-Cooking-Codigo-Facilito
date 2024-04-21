
import { useEffect, useState } from 'react';
import { useRestClient } from './useRestClient';
import type { Category } from '../types/categories';
import { baseUrl } from '../constants'


export function useGetCategoriesService(): {
    categories: Category[], 
    loading: boolean, 
    error: unknown
} {
  const url = `${baseUrl}categories.php`;
  const [get, rawData, loading, error] = useRestClient('get');
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchData() {
        await get(url);
    }
    
    fetchData();
  }, [url, get])

  useEffect(() => {
    if (Array.isArray(rawData?.categories) && rawData.categories.length > 0) {
        setCategories(rawData.categories);
    }
  }, [rawData]);

  return { categories, loading, error };
}
