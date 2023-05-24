import React from "react";
import { useSelector } from "react-redux";
import "../style/appContent.css";
import TodoItem from "./TodoItem";


const AppContent = () => {

  const todoList = useSelector((state) => state.todo.todoList); //how you get value from store
  const sortedTodoList = [...todoList]; //... means all the vales will be used
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time)); // compare the time

  return (
    <div className="todo_wrap">
      {sortedTodoList && sortedTodoList.length > 0 ? (
        sortedTodoList.map((todo) => (
          <TodoItem key= {todo.id} todo={todo} />
          ))
      ) : (
       <p className="emptyText">No Todos</p>
      )}
    </div>
  );
};

export default AppContent;
