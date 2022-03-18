import React from "react";
import Card from '../UI/Card'
import UsersList from "./UsersList";
import './Users.css'

function Users (props) {


    return (
        <>
        <Card className='users'>
        <UsersList items={props.users} />    
        </Card>
        </>
    )
}

export default Users