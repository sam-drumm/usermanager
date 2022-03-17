import React from "react";
import Card from "../UI/Card";
import './UserItem.css'

function UserItem(props) {
return (
    <li>
        <Card>
            <h2>{props.username}</h2>
        </Card>
    </li>
)

}

export default UserItem