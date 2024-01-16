"use client";
import Image from "next/image";
import checkIcon from "../../../public/images/icon-check.svg";
import crossIcon from "../../../public/images/icon-cross.svg";
import { useMyContext } from "../context/context";
import { Draggable } from "@hello-pangea/dnd";

const Todo = ({ todo, index }) => {
  const { globalState, updateGlobalState } = useMyContext();
  const handleChange = () => {
    const todoId = todo.id;
    const updatedState = globalState.map((e) => {
      if (e.id != todoId) {
        return e;
      } else {
        return { ...e, active: !e.active };
      }
    });
    updateGlobalState(updatedState);
  };
  const handleDelete = () => {
    const newList = globalState.filter((e) => e.id !== todo.id);
    updateGlobalState(newList);
  };

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="none presentation"
        >
          <div
            className="text-xs todo-custom-style bg-white w-ful h-16   px-6 py-5 border-b border-veryLightGrayishBlue flex justify-between items-center  dark:bg-veryDarkDesaturatedBlue dark:border-veryDarkGrayishBlue md:text-base"
            role="none presentation"
          >
            <label
              className={`
          ${
            todo.active
              ? "dark:text-veryLightGrayishBlue text-veryDarkBlue cursor-pointer"
              : " dark:text-veryDarkGrayishBlue text-darkGrayishBlue line-through cursor-pointer"
          } flex
        `}
            >
              <div
                className="checkbox-custom-style w-[24px]
         h-[24px] rounded-full bg-veryLightGrayishBlue mr-6 flex items-center justify-center dark:bg-veryDarkGrayishBlue"
                role="none presentation"
              >
                <div
                  className={`checkbox-inner w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center dark:bg-veryDarkDesaturatedBlue ${
                    todo.active ? "" : "checkbox-inner-unactive"
                  }`}
                  role="none presentation"
                >
                  <Image
                    src={checkIcon}
                    alt="check icon"
                    className={`${
                      todo.active
                        ? "check-icon-custom hidden"
                        : "check-icon-custom"
                    }`}
                  />
                </div>
              </div>
              <input
                type="checkbox"
                className="cursor-pointer hidden "
                onChange={handleChange}
              />

              {todo.name}
            </label>
            <button
              className="delete-btn-custom hidden "
              onClick={handleDelete}
            >
              <Image src={crossIcon} alt="delete icon" />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Todo;
