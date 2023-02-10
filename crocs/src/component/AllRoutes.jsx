import React from 'react'
import {Route,Routes,HashRouter} from 'react-router-dom'
import Cartpage from '../pages/Cartpage'

import Homepage from '../pages/Homepage'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Singlepage from '../pages/Singlepage'
import Women from '../pages/Women'
function AllRoutes() {
  
  return (
    <div>
      <HashRouter>
        <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path="/Women" element={<Women />} />
            <Route path="/Women/:id" element={<Singlepage />}></Route>
            <Route path='/Cartpage/:id' element={<Cartpage />}></Route>
           <Route path="/Signin" element={<Signin />}></Route>
           <Route path='/Signup' element={<Signup />}></Route>
        </Routes>
        </HashRouter>
    </div>
  )
}

export default AllRoutes