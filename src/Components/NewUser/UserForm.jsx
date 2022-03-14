import React, {useState} from "react";
import './UserForm.css'

function UserForm (props) {
const [form,setForm] = useState({
    username: '',
    age: ''
})

function handleUsernameChange(e) {
    setForm((preState) =>{
        return {...preState, username: e.target.value}
    })
}

function handleAgeChange(e) {
    setForm((preState)=> {
        return {...preState, age: e.target.value}
    })
}

function handleSubmit(e) {
        e.preventDefault()

        const userData ={
            username:form.username,
            age:form.age,
        }

        props.onSaveUserData(userData)
        setForm({
            username: '',
            age: ''
        })
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <div className='new-user__controls'>

          <div className='new-user__control'>
            <label>
            Username
            </label>
            <input type="text" value={form.username} onChange={handleUsernameChange} />
          </div>

          <div className='new-user__control'>
            <label>
            Age
            </label>
            <input type="text" value={form.age} onChange={handleAgeChange}/>
          </div>

          <div className='new-user__actions'>
            <button type="submit">
            Add User
            </button>
          </div>

        </div>
      </form>
        </>
    )
}

export default UserForm