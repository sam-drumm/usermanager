import React from "react";
import UserForm from "./UserForm";
import './NewUser.css'

function NewUser () {
    const userDataHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString()
        }
    }         
    
    return(
        <>
        <UserForm onSaveUserData={userDataHandler} />

        </>
    )
}

export default NewUser


