"use client";
import { useState, useContext, createContext } from "react";

const appContext = createContext();

export const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const value = { products, setProducts, isLoading, setIsLoading };
  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export const useAppContext = () => {
  return useContext(appContext);
};
