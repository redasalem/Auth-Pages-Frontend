import { Navigate, Route, Routes } from "react-router-dom"
import SignUp from "./pages/register"
import Login from "./pages/login"
import ForgetPassword from "./pages/forget-password"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
    </Routes>
  )
}

export default App