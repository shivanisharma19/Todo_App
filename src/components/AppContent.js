import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/appContent.css";
import { format } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteTodo } from "../Slice/todoSlice";
import TodoModal from "./TodoModal"
import { toast } from "react-hot-toast";
import ConfirmationModal from "./ConfirmationModal";

const AppContent = () => {
  const dispatch = useDispatch()
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);

  const todoList = useSelector((state) => state.todo.todoList); //how you get value from store
  const sortedTodoList = [...todoList]; //... means all the vales will be used
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time)); // compare the time

  const handleDelete = (todo) => {
    setConfirmationModal(true)
    // dispatch(deleteTodo(todo.id))
    //toast.success('ToDo sucessfully deleted')
  }

  const handleUpdate = () => {
    setModalOpen(true);
  }


  return (
    <><div className="todo_wrap">
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
    <ConfirmationModal modalOpen={confirmationModal} setModalOpen={setConfirmationModal}/>
    <TodoModal type={'Update'} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default AppContent;
