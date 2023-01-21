import React from 'react'
import {Routes,Route} from "react-dom"
import Homepage from '../pages/Homepage'
function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes