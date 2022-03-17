import React from "react";
import Card from "../UI/Card";
import './UserItem.css'

function UserItem(props) {
return (
    <li>
        <Card className="user-item" >
            <div className="user_item__description">
            <h2>{props.username}</h2>
            <div className="user-item__age">{props.age}</div>
            </div>
        </Card>
    </li>
)

}

export default UserItem