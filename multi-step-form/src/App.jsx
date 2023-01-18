import {ContextProvider} from "./Context"
import Wrapper from './components/Wrapper/Wrapper'
import Sidebar from "./components/Sidebar/Sidebar"
import MainForm from "./components/MainForm/MainForm"

import './App.css'

// make console.log to display the result

function App() {
  return (
    <ContextProvider>
      <Wrapper>
        <Sidebar />
        <MainForm />
      </Wrapper>
    </ContextProvider>
  )
}

export default App
