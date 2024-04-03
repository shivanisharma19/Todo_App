import React, {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateFilterStatus } from "../Slice/todoSlice"
import TodoModal from "./TodoModal"
import Button, { DropdownButton } from "../utilities/Button"
import "../style/app.css"

const AppHeader = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const filterStatus = useSelector((state) => state.todo.filterStatus);
    const handleFilter = (e) => {
        dispatch(updateFilterStatus(e.target.value))
    }

    return (
    <div className="header" >
        <Button variant="primary" onClick={()=>setModalOpen(true)}>Add Task</Button>
        <DropdownButton id='filter' value={filterStatus} onChange={handleFilter}>
            <option value='all'>All</option>
            <option value='incomplete'>Incomplete</option>
            <option value='complete'>Complete</option>
        </DropdownButton>
        <TodoModal type= {'Add'} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
)}

export default AppHeader