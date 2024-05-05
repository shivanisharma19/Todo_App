import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md"
import Button from '../utilities/Button'
import { deleteTodo } from '../Slice/todoSlice'
import '../style/modal.css'

const ConfirmationModal = ({ id, title, modalOpen, setModalOpen}) => {
    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch(deleteTodo(id))
        toast.success('Todo sucessfully deleted')
        setModalOpen(false)
    }

    return ( modalOpen &&
    <div className='wrapper'>
        <div className='modal_container'>
            <div className='confirmation_modal'>
                <div className="closeButton" onClick={()=>setModalOpen(false)}>
                    <MdOutlineClose />
                </div>
                <div className='confirmation_text' >
                    <p> Are you sure you want to delete <b>{title}</b> ? </p>
                 </div>
                <div className="buttonContainer">
                    <Button type="submit" variant="primary" onClick={()=>onSubmit()}> Delete </Button>
                    <Button type="cancel" variant="secondary" onClick={()=>setModalOpen(false)}>Cancel</Button>
                 </div>
            </div>
        </div>
    </div>
    )
}

export default ConfirmationModal