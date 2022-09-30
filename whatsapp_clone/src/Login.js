import React from 'react'
import "./Login.css"
import { Button } from "@mui/material"
import { auth, provider } from "./firebase"
import { useStateValue } from "./StateProvider"
import { actionTypes } from "./reducer"

const Login = () => {

    const [{}, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then( (res) =>  {
            dispatch({
                type: actionTypes.SET_USER,
                user: res.user
            })
        } )
        .catch( (err) => alert(err.message) )
    }

  return (
    <div className='login'>

        <div className='login_container'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png'/>
            <div className='login_text'>
                <h1>Sign In to WhatsApp</h1>
            </div>
            <Button type='submit' onClick={signIn}>
                Sign In with Google
            </Button>
        </div>

    </div>
  )
}

export default Login