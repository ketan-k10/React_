import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import { Component } from 'react'
import Top from './components/Top/Top'
export default function Layout() {
  return (
    <>
    <Top />
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}
