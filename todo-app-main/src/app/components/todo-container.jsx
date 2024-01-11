"use client";
import Todo from "./todo";
import AddTodo from "./add-todo";
import { useMyContext } from "../context/context";
import { useState, useEffect } from "react";

const TodoContainer = () => {
  const { globalState, updateGlobalState } = useMyContext();
  const [currentFilter, setCurrentFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const itemsLeft = globalState.filter((e) => e.active === true);

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

  const handleClear = () => {
    const clearedList = globalState.filter((e) => e.active === true);
    updateGlobalState(clearedList);
  };

  return (
    <div className="w-full absolute mt-[-140px] mx-auto ">
      {/* <div className=" bg-white w-[540px] h-16 mx-auto rounded-md mb-6 px-6 py-5 dark:bg-veryDarkDesaturatedBlue  ">

      </div> */}
      <AddTodo />
      <div className="w-[540px] mx-auto overflow-hidden rounded-md bg-white   dark:bg-veryDarkDesaturatedBlue ">
        {filteredTodos.map((e) => (
          <Todo key={e.id} todo={e} />
        ))}

        <div className="h-12 px-6 py-4 flex justify-between items-center  text-darkGrayishBlue text-sm">
          <div className=" ">{itemsLeft.length} items left</div>
          <div>
            <button
              className={`${
                currentFilter === "all" ? "active-btn" : ""
              } hover:text-veryDarkBlue dark:hover:text-veryLightGray`}
              onClick={() => {
                setCurrentFilter("all");
              }}
            >
              All
            </button>
            <button
              className={`${
                currentFilter === "active" ? "active-btn" : ""
              } mx-5 hover:text-veryDarkBlue dark:hover:text-veryLightGray`}
              onClick={() => {
                setCurrentFilter("active");
              }}
            >
              Active
            </button>
            <button
              className={`${
                currentFilter === "completed" ? "active-btn" : ""
              } hover:text-veryDarkBlue dark:hover:text-veryLightGray`}
              onClick={() => {
                setCurrentFilter("completed");
              }}
            >
              Completed
            </button>
          </div>
          <div>
            <button
              className="hover:text-veryDarkBlue  dark:hover:text-veryLightGray"
              onClick={handleClear}
            >
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoContainer;
