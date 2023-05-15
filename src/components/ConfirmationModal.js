import React from 'react'
import Button from '../utilities/Button'

const ConfirmationModal = ({modalOpen, setModalOpen}) => {

    return ( modalOpen &&
    <div className='confirmation_Modal'>
        <p className='confirmation_text'> Are you sure you want to delete the todo </p>
        <Button type="submit" variant="primary"> Delete </Button>
        <Button type="cancel" variant="secondary" onClick={()=>setModalOpen(false)}>Cancel</Button>
    </div>
    )
}

export default ConfirmationModal