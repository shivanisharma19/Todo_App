  import React, {useEffect, useState} from 'react'
  import { MdDelete, MdEdit } from "react-icons/md";
  import Checkbox from './Checkbox';
  import TodoModal from "./TodoModal"
  import ConfirmationModal from "./ConfirmationModal";
  import "../style/todoItem.css";
  
  const TodoItem = ({todo}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [confirmationModal, setConfirmationModal] = useState(false);
    const [checked, setChecked] = useState(false);

    useEffect (() => {
     (todo.status === "complete") ? setChecked(true) : setChecked(false)
    }, [todo])

    const handleDelete = () => {
      setConfirmationModal(true)
    }
  
    const handleUpdate = () => {
      setModalOpen(true)
    }
  
 return (
  <div className="todo_item">
    <div className="todo_details">
      <Checkbox todo={todo} checked={checked} setChecked={setChecked} />  
      <div className="todo_text">
        <p className={(todo.status) === "complete" ? "todo_text completed" : "todo_text"}>{todo.title}</p>
          <p className="todo_time">
            {(todo.time)}
          </p>
      </div>
    </div>
    <div className="todo_actions">
      <MdDelete className="delete" onClick={() => handleDelete(todo)} />
        <MdEdit className="edit" onClick={() => handleUpdate(todo)} />
    </div>
    <ConfirmationModal id={todo.id} title={todo.title} modalOpen={confirmationModal} setModalOpen={setConfirmationModal} />
    <TodoModal type={'Update'} todo={todo} modalOpen={modalOpen} setModalOpen={setModalOpen} />
  </div>
     )
}


export default TodoItem