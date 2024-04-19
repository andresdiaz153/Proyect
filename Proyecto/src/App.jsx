// App.jsx
import "./App.css";
import Menu from './Components/Menu/Menu.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import ForgetPass from './Components/Forgetpass/ForgetPass.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgetPass" element={<ForgetPass />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
