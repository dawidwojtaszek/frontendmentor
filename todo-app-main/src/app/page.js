"use client";
import Header from "./components/header";
import TodoContainer from "./components/todo-container";
import { DragDropContext } from "@hello-pangea/dnd";
export default function Home() {
  const handleDragEnd = (result) => {
    console.log("drag end");
  };
  return (
    <main>
      <Header />
      <DragDropContext onDragEnd={handleDragEnd}>
        <TodoContainer />
      </DragDropContext>
    </main>
  );
}
