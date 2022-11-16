import Link from "next/link";
import React from "react";
import { Todo } from "../../typing";
import "../../styles/globals.css";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();
  return todos;
};

async function TodoList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((curr: Todo, idx: number) => (
        <div key={idx}>
          <Link href={`/todos/${curr.id}`}>Todo: {curr.id}</Link>
        </div>
      ))}
    </>
  );
}

export default TodoList;
