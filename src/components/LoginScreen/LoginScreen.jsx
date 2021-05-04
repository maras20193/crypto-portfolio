import React, { useRef } from 'react'
import { auth } from '../../firebase'

import './LoginScreen.scss'

const LoginScreen = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser => {
      console.log(authUser)
    })).catch((error => {
      alert(error.message)
    }))
  }

  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser => {
      console.log(authUser)
    })).catch((error => {
      alert(error.message)
    }))
  }

  return ( 
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img src="https://www.blockchain.com/static/img/home/hero-gradient.svg" alt=""/>
      </div>
      <form className="loginScreen__form">
        <h1>Sign In</h1>
        <input 
        type="email"
        placeholder="Email"
        ref={emailRef}
        />
        <input 
        type="password"
        placeholder="Password"
        ref={passwordRef}
        />
        <button
        type='subimt'
        onClick={signIn}
        >Sign In</button>
        <h4>
          <span
          className="loginScreen__underline"
          onClick={register}
          >
            Sign up now.
          </span>

        </h4>
      </form>
    </div>
   );
}
 
export default LoginScreen;