import React from 'react'
import Nav from './Comp/Nav'
import Main from './Comp/Main'
import Bill from './Comp/Bill'
import { ContextProvider } from './Context/CreateContext'
const App = () => {
  return (
    <ContextProvider>
      <Nav/>
      <Main/>
      <Bill/>
    </ContextProvider>
  )
}

export default App
