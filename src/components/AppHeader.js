import React, {useState} from "react"
import Button from "../utilities/Button"
import '../style/app.css'
import { DropdownButton } from "../utilities/Button"
import TodoModal from "./TodoModal"

const AppHeader = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
    <div className="header" >
        <Button variant="primary" onClick={()=>setModalOpen(true)}>Add Task</Button>
        <DropdownButton id='filter'>
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
        </DropdownButton>
        <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
)}

export default AppHeader