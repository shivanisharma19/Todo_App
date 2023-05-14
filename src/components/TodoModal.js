import React, {useState }  from "react"
import { useDispatch } from "react-redux"
import { toast } from 'react-hot-toast'
import { MdOutlineClose } from "react-icons/md"
import { v4 as uuid } from 'uuid'
import Button from "../utilities/Button"
import { addTodo } from "../Slice/todoSlice"
import '../style/modal.css'
import '../style/button.css'

const TodoModal = ({modalOpen, setModalOpen}) => {
    const dispatch  = useDispatch()
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('incomplete')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title && status) {
        dispatch(addTodo({
            id : uuid(),
            title,
            status,
            time : new Date().toLocaleString(),
        })
        )
        toast.success('Item Added Successfully')
        setModalOpen(false)
       }
       else
       toast.error('Please provide and total')
    }
return(
    <>
    {modalOpen &&
    <div className="wrapper">
        <div className="form_container">
            <div className="closeButton" onClick={()=>setModalOpen(false)}
            onKeyDown={()=>setModalOpen(false)}
            tabIndex={0}>
                <MdOutlineClose />
            </div>
            <form className="todo_form" onSubmit={(e) => handleSubmit(e)}>
                <h1 className="formTitle">{type}</h1>
                <label htmlFor="title" value={title} onChange={(e) => setTitle(e.target.value)}> Title :
                    <input type="text" id="title"/>
                </label>
                <label htmlFor="status"> Status : 
                     <select name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="incomplete">Incomplete</option>
                        <option value="complete">Complete</option>
                    </select>
                </label>
                <div className="buttonContainer">
                <Button type="submit" variant="primary">Add Task</Button>
                <Button type="cancel" variant="secondary" onClick={()=>setModalOpen(false)}>Cancel</Button>
                </div>
            </form>
        </div>
    </div>}
    </>
    )
}

export default TodoModal