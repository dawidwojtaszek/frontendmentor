const Todo = ({ todo }) => {
  console.log(todo.name);
  console.log(todo.active);
  return (
    <div className="bg-white w-ful h-16   px-6 py-5 border-b border-veryLightGrayishBlue dark:bg-veryDarkDesaturatedBlue dark:border-veryDarkGrayishBlue ">
      <label
        className={
          todo.active
            ? "dark:text-veryLightGrayishBlue text-veryDarkBlue cursor-pointer"
            : " dark:text-veryDarkGrayishBlue text-darkGrayishBlue line-through cursor-pointer"
        }
      >
        <input type="checkbox" className="cursor-pointer" />
        {todo.name}
      </label>
    </div>
  );
};

export default Todo;
