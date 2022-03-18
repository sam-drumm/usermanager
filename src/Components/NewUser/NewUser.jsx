import React from "react";
import UserForm from "./UserForm";
import './NewUser.css'

function NewUser (props) {
    const userDataHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString()
        }
        props.onAddUser(userData)
    }         
    
    return(
        <div className="new-user">
        <UserForm onSaveUserData={userDataHandler} />
        </div>
    )
}

export default NewUser


