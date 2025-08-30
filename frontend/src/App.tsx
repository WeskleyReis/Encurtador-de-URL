import { Routes, Route } from "react-router-dom"
import FormUrl from "./components/FormUrl"
import Redirecionar from "./components/Redirecionar"

import './styles/App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <h1>Encurtador de URLs</h1>
          <FormUrl />
          <footer className="footer">
            &copy; This website was created by
            <a href="https://www.linkedin.com/in/weskleyreis/" target="_blank">
              Weskley Reis
            </a>
            solely as part of his activity.
            </footer>
        </>
      } />
      <Route path="/:shortCode" element={<Redirecionar />} />
    </Routes>
  )
}

export default App
