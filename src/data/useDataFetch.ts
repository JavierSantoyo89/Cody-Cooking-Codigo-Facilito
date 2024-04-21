import { useState } from "react";

const useDataFetch = async () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setIsData] = useState({ data: [] });

  const getFetch = async () => {

  try {
    const response = await fetch("www.themealdb.com/api/json/v1/1/categories.php");
    const data = await response.json();
    setIsLoading(false);
    setIsData(data);
  } catch (error) {
    console.log("Error de fechin:", error);
  } 
  }
  return { isLoading, data, getFetch };
};

export default useDataFetch;
