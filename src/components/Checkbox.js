import React, {useState} from 'react'
import { updateTodo } from '../Slice/todoSlice'
import { useDispatch } from 'react-redux'
import '../style/checkbox.css'

const Checkbox = ({todo, checked, setChecked}) => {
    const dispatch = useDispatch()

    const handleStatus = () => {
        setChecked(!checked)
        dispatch(updateTodo({
        ...todo,
        status : checked ? "incomplete" : "complete"
          }))
    }

   return (
    <div className='todo-checkbox'>
      <input type='checkbox' checked={checked} onChange={() => handleStatus()}/>
    </div>
   )
}

export default Checkbox