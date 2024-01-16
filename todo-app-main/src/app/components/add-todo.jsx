"use client";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useMyContext } from "../context/context";
const AddTodo = () => {
  const { globalState, updateGlobalState } = useMyContext();
  const [inputState, setInputState] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();
    updateGlobalState([
      ...globalState,
      { id: id, name: inputState, active: true },
    ]);
    setInputState("");
  };
  const handleChange = (e) => {
    setInputState(e.target.value);
  };
  return (
    <div
      className=" bg-white w-[325px] h-16 mx-auto rounded-md mb-6 px-6 py-5 flex items-center justify-start shadow-lg dark:bg-veryDarkDesaturatedBlue md:w-[540px] "
      role="none presentation"
    >
      <div
        className=" flex-shrink-0 w-[24px] h-[24px] rounded-full bg-veryLightGrayishBlue flex items-center justify-center dark:bg-veryDarkGrayishBlue"
        role="none presentation"
      >
        <div
          className="w-[22px] h-[22px] bg-white rounded-full dark:bg-veryDarkDesaturatedBlue"
          role="none presentation"
        ></div>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          className="w-full ml-6 dark:bg-veryDarkDesaturatedBlue focus:outline-none dark:text-veryLightGrayishBlue"
          placeholder="Create a new todo..."
          onChange={handleChange}
          value={inputState}
        />
      </form>
    </div>
  );
};

export default AddTodo;
