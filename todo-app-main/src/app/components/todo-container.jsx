"use client";
import { v4 as uuid } from "uuid";
import Todo from "./todo";
import { useMyContext } from "../context/context";
import { useState, useEffect } from "react";

const TodoContainer = () => {
  const { globalState, upadateGlobalState } = useMyContext();
  const [currentFilter, setCurrentFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const itemsLeft = globalState.filter((e) => e.active === true);

  // const filterList = (filterName) => {
  //   switch (filterName) {
  //     case "all":
  //       tempList = globalState;
  //       setCurrentList(tempList);
  //       break;
  //     case "active":
  //       tempList = globalState.filter((e) => e.active === true);
  //       setCurrentList(tempList);
  //       break;
  //     case "completed":
  //       tempList = globalState.filter((e) => e.active === false);
  //       setCurrentList(tempList);
  //       break;
  //   }
  // };

  useEffect(() => {
    switch (currentFilter) {
      case "all":
        setFilteredTodos(globalState);
        break;
      case "active":
        setFilteredTodos(globalState.filter((todo) => todo.active));
        break;
      case "completed":
        setFilteredTodos(globalState.filter((todo) => !todo.active));
        break;
      default:
        setFilteredTodos(globalState);
        break;
    }
  }, [globalState, currentFilter]);

  return (
    <div className="w-full absolute mt-[-140px] mx-auto ">
      <div className=" bg-white w-[540px] h-16 mx-auto rounded-md mb-6 px-6 py-5 dark:bg-veryDarkDesaturatedBlue  "></div>
      <div className="w-[540px] mx-auto overflow-hidden rounded-md bg-white   dark:bg-veryDarkDesaturatedBlue ">
        {filteredTodos.map((e) => (
          <Todo key={e.id} todo={e} />
        ))}

        <div className="h-12 px-6 py-4 flex justify-between items-center  text-darkGrayishBlue text-sm">
          <div className=" ">{itemsLeft.length} items left</div>
          <div>
            <button
              className="active-btn hover:text-veryDarkBlue dark:hover:text-veryLightGray"
              onClick={() => {
                setCurrentFilter("all");
              }}
            >
              All
            </button>
            <button
              className=" hover:text-veryDarkBlue dark:hover:text-veryLightGray mx-5"
              onClick={() => {
                setCurrentFilter("active");
              }}
            >
              Active
            </button>
            <button
              className="hover:text-veryDarkBlue dark:hover:text-veryLightGray "
              onClick={() => {
                setCurrentFilter("completed");
              }}
            >
              Completed
            </button>
          </div>
          <div>
            <button className="hover:text-veryDarkBlue  dark:hover:text-veryLightGray">
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoContainer;
