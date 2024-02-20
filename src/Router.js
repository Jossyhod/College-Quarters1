import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'

const Router = () => {
  return (
    <Routes>
        <Route
          path = "/"
          element = {
            <Homepage />
          }/>
        
    </Routes>
  )
}

export default Router