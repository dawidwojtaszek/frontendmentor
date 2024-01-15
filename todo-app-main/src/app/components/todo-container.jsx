"use client";
import Todo from "./todo";
import AddTodo from "./add-todo";
import { useMyContext } from "../context/context";
import { useState, useEffect } from "react";
import { Droppable } from "@hello-pangea/dnd";
import { DragDropContext } from "@hello-pangea/dnd";

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

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    if (result.source.index === result.destination.index) return;
    const arr = [...globalState];
    const item = globalState[result.source.index];
    arr.splice(result.source.index, 1);
    arr.splice(result.destination.index, 0, item);
    return updateGlobalState(arr);
  };

  const handleClear = () => {
    const clearedList = globalState.filter((e) => e.active === true);
    updateGlobalState(clearedList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="w-full absolute mt-[-140px] mx-auto ">
        <AddTodo />

        <div className="w-[325px] mx-auto overflow-hidden rounded-md shadow-lg md:w-[540px]">
          <Droppable droppableId="droppable1" type="group">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {filteredTodos.map((e, index) => (
                  <Todo key={e.id} todo={e} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <div className="rounded-md text-xs h-[50px] px-6 py-4 flex justify-between items-center bg-white   dark:bg-veryDarkDesaturatedBlue text-darkGrayishBlue md:text-sm">
            <div className=" ">{itemsLeft.length} items left</div>
            <div className="hidden md:block">
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
          {/* Mobile */}
          <div className=" rounded-md mt-4 bg-white text-xs h-12 w-full overflow-hidden flex justify-center items-center md:hidden dark:bg-veryDarkDesaturatedBlue dark:text-veryLightGrayishBlue">
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
        </div>
        <div className="flex w-full justify-center mt-10 text-darkGrayishBlue md:mt-12">
          Drag and drop to reorder list
        </div>
      </div>
    </DragDropContext>
  );
};
export default TodoContainer;
