import React, {useEffect, useState }  from "react"
import { useDispatch } from "react-redux"
import { toast } from 'react-hot-toast'
import { MdOutlineClose } from "react-icons/md"
import { v4 as uuid } from 'uuid'
import Button from "../utilities/Button"
import { addTodo, updateTodo } from "../Slice/todoSlice"
import '../style/modal.css'
import '../style/button.css'

const TodoModal = ({type, modalOpen, setModalOpen, todo}) => {
    const dispatch  = useDispatch()
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('incomplete')

    useEffect(() => {
        if( type === 'Update' && todo) {
            setTitle(todo.title)
            setStatus(todo.status)
        }
        else {
            setTitle('')
            setStatus('incomplete')
        }
   }, [type, todo, modalOpen])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title) {
         toast.error('Please Provide a Title')
         return
        }
        if(title && status) {
            if(type === 'Add') {
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
            else if (type === 'Update'){
                if( todo.title !== title || todo.status !== status){
                    dispatch(updateTodo({
                        ...todo, 
                        title,
                        status,
                    }))
                    toast.success('Sucessfully updated the todo')
                } else
                    toast.error('No Changes Made !')
             }
             setModalOpen(false)
        }
    }

return(
    <>
    {modalOpen &&
    <div className="wrapper">
        <div className="modal_container">
            <div className="closeButton" onClick={()=>setModalOpen(false)}>
                <MdOutlineClose />
            </div>
            <form className="todo_form" onSubmit={(e) => handleSubmit(e)}>
                <h1 className="formTitle"> {type} todo  </h1>
                <label htmlFor="title" > Title :
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </label>
                <label htmlFor="status"> Status : 
                     <select name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="incomplete">Incomplete</option>
                        <option value="complete">Complete</option>
                    </select>
                </label>
                <div className="buttonContainer">
                <Button type="submit" variant="primary"> {type} Task</Button>
                <Button type="cancel" variant="secondary" onClick={()=>setModalOpen(false)}>Cancel</Button>
                </div>
            </form>
        </div>
    </div>}
    </>
    )
}

export default TodoModal