import React from "react";
import { useSelector } from "react-redux";
import "../style/appContent.css";
import { format } from "date-fns";

const AppContent = () => {
  const todoList = useSelector((state) => state.todo.todoList); //how you get value from store
  const sortedTodoList = [...todoList]; //... means all the vales will be used
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time)); // compare the time
  return (
    <div className="todo_wrap">
      {sortedTodoList && sortedTodoList.length > 0 ? (
        sortedTodoList.map((todo) => (
          <div key={todo.id} className="todo_item">
            <div className="todo_details">
              <p className="todo_text">{todo.title}</p>
              <p className="todo_time">
                {format(new Date(todo.time), "p, dd/MM/yyy")}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="emptyText">No Todos</p>
      )}
    </div>
  );
};

export default AppContent;
