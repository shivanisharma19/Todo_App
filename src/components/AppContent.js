import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/appContent.css";
import { format } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteTodo } from "../Slice/todoSlice";
import TodoModal from "./TodoModal"

const AppContent = () => {
  const dispatch = useDispatch()
  const [modalOpen, setModalOpen] = useState(false);

  const todoList = useSelector((state) => state.todo.todoList); //how you get value from store
  const sortedTodoList = [...todoList]; //... means all the vales will be used
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time)); // compare the time

  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo.id))
  }

  const handleUpdate = (todo) => {
    // setModalOpen(true);
    // <TodoModal type='Create' modalOpen={modalOpen} setModalOpen={setModalOpen}/>
  }


  return (
    <div className="todo_wrap">
      {sortedTodoList && sortedTodoList.length > 0 ? (
        sortedTodoList.map((todo) => (
          <div key={todo.id} className="todo_item">
            <div className="todo_details">
              []
              <div className="todo_text">
                <p className={(todo.status) === "complete" ? "todo_text completed" : "todo_text"}>{todo.title}</p>
                <p className="todo_time">
                 {format(new Date(todo.time), "p, dd/MM/yyy")}
                </p>
              </div>
            </div>
            <div className="todo_actions">
              <MdDelete className="delete" onClick={() => handleDelete(todo)} />
              <MdEdit className="edit" onClick={() => handleUpdate(todo)} />
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
