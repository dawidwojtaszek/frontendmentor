"use client";
import { v4 as uuid } from "uuid";
import Todo from "./todo";
import { useMyContext } from "../context/context";

const TodoContainer = () => {
  const { globalState, upadateGlobalState } = useMyContext();
  console.log(globalState);
  return (
    <div className="w-full absolute mt-[-140px] mx-auto ">
      <div className=" bg-white w-[540px] h-16 mx-auto rounded-md mb-6 px-6 py-5 dark:bg-veryDarkDesaturatedBlue  "></div>
      <div className="w-[540px] mx-auto overflow-hidden rounded-md bg-white   dark:bg-veryDarkDesaturatedBlue ">
        {globalState.map((e) => (
          <Todo todo={e} key={e.id} />
        ))}

        <div className="h-12 px-6 py-4 dark:text-veryLightGrayishBlue text-veryDarkBlue">
          items left
        </div>
      </div>
    </div>
  );
};
export default TodoContainer;
