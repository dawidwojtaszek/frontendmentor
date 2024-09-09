"use client";
import { useState, useContext, createContext, useEffect } from "react";
const appContext = createContext();

export const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const setData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const products = await fetchData();
  //       setProducts(products);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   setData();
  // }, []);
  const value = { products, setProducts, isLoading, setIsLoading };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export const useAppContext = () => {
  return useContext(appContext);
};
