import React from 'react'
import "./App.css"
import Main from "./components/Main" 
import {Routes ,Route} from 'react-router-dom'


const App = () => {
  return (
    <>
    <Routes>
      <Route  path='/BhagavadGitaWeb/' element={<Main/>}/>
    </Routes>

    </>
  )
}

export default App