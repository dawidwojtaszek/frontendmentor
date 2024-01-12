"use client";
import { createContext, useContext, useState } from "react";

const myContext = createContext();
const initialState = [
  { id: "0", name: "Complete online JavaScript course", active: false },
  { id: "1", name: "Jog around the park 3x", active: true },
  { id: "2", name: "10 minutes meditation", active: true },
  { id: "3", name: "Read for 1 hour", active: true },
  { id: "4", name: "Pick up groceries", active: true },
  { id: "5", name: "Complete Todo App on Frontend Mentor", active: true },
];

export const Provider = ({ children }) => {
  const [globalState, setGlobalState] = useState(initialState);
  const updateGlobalState = (newState) => {
    setGlobalState([...newState]);
  };

  return (
    <myContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </myContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(myContext);
};
