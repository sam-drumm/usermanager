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
        <>
        <UserForm onSaveUserData={userDataHandler} />
        </>
    )
}

export default NewUser


