import React from "react";
import Card from '../UI/Card'
import UsersList from "./UsersList";

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