import { useState } from 'react'

import './App.css'

import SignIn from './components/signinleft';
import SignInRight from './components/signinright';
import SignUpLeft from './components/signupleft';
import SignUpRight from './components/signupright';
import Navbar from './components/Header';
import Header from './components/Header';
import Top from './components/Top';

function App() {
    let myObj ={
      username: "Ketan",
      age: 21
    }
    let newArr = [1,2,3]

  return (
    <>
          {/* <Header /> */}
          {/* <Top /> */}
          <SignIn/>
          <SignIn image="https://images.pexels.com/photos/16603971/pexels-photo-16603971/free-photo-of-taxi-on-street-by-tunnel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
          < SignInRight/>
          <SignUpLeft/>
          <SignUpRight/>
          
    
    </>
  )
}

export default App
