import React, {useState} from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import './UserForm.css'

function UserForm (props) {
const [form,setForm] = useState({
  enteredUsername: '',
  enteredAge: ''
})

const [alert, setAlert] = useState()

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
          setAlert({
            title: 'Next!',
            message: 'Wawoqq'
          })
          return
        }
        if (form.enteredAge < 0) {
          setAlert({
            title: 'OMG',
            message: 'What are you doing'
          })
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

function errorHandler () {
  setAlert(null)
}

    return(
    <>
    {alert && <ErrorModal title={alert.title} message={alert.message} onOk={errorHandler}/>}
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
            <Button type="submit">
            Add User
            </Button>
          </div>

        </div>
      </form>
        </>
    )
}

export default UserForm