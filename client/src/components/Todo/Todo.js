import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo({userId}) {

  return (
    <div className="max-w-[1440px] mx-auto mt-5">
          <AddTodo userId={userId} />
          <TodoList userId={userId}/>
    </div>
  )
}
