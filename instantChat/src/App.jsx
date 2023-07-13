import { Login } from "./pages/Login"
import { Navbar } from "./components/Navbar"
import { ChatRoom } from "./pages/chatRoom"
import { Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./route/privateRoute";
import { AuthProvider } from "./context/authContext";

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<PrivateRoute><ChatRoom /></PrivateRoute>} />
      </Routes>
    </AuthProvider>

  )
}