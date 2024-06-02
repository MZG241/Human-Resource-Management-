import React from 'react'
import Home from './Home'
import Create from './Create'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Edit from './Edit'


const App = () => {
  return (

   <BrowserRouter>
  <Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/Create" element={<Create/ >}></Route>
<Route path="/Edit/:id" element={<Edit/ >}></Route>

  </Routes> 
   </BrowserRouter>
  )
}

export default App