"use client";
import Header from "./components/header";
import TodoContainer from "./components/todo-container";
import { DragDropContext } from "@hello-pangea/dnd";
import { useMyContext } from "./context/context";

export default function Home() {
  // const { globalState, updateGlobalState } = useMyContext();

  // const handleDragEnd = (result) => {
  //   if (!result.destination) return;
  //   if (result.source.index === result.destination.index) return;
  //   const arr = [...globalState];
  //   const item = globalState[result.source.index];
  //   arr.splice(result.source.index, 1);
  //   arr.splice(result.destination.index, 0, item);
  //   return updateGlobalState(arr);
  // };
  return (
    <main>
      <Header />
      {/* <DragDropContext onDragEnd={handleDragEnd}> */}
      <TodoContainer />
      {/* </DragDropContext> */}
    </main>
  );
}
