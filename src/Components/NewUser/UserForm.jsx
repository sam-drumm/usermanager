import React, {useState} from "react";
import './UserForm.css'

function UserForm (props) {
const [form,setForm] = useState({
  enteredUsername: '',
  enteredAge: ''
})

function handleUsernameChange(e) {
    setForm((preState) =>{
        return {...preState, enteredUsername: e.target.value}
    })
}

function handleAgeChange(e) {
    setForm((preState)=> {
        return {...preState, enteredAge: e.target.value}
    })
}

function handleSubmit(e) {
        e.preventDefault()
        if (form.enteredUsername === '' || form.enteredAge === ''){
          window.alert('Please enter a valid name and age')
          return
        }
        if (form.enteredAge < 0) {
          window.alert('You have to have been born')
          return
        }

        const userData ={
            username: form.enteredUsername,
            age:form.enteredAge,
        }

        props.onSaveUserData(userData)
        setForm({
            enteredUsername: '',
            enteredAge: ''
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
            <input type="text" value={form.enteredUsername} onChange={handleUsernameChange} />
          </div>

          <div className='new-user__control'>
            <label>
            Age
            </label>
            <input type="number" value={form.enteredAge} onChange={handleAgeChange}/>
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