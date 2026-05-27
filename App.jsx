import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Home() {
  return <h2>AttachLink Kenya - Home</h2>
}

function Vacancies() {
  return <h2>Vacancies Page</h2>
}

function Login() {
  return <h2>Login Page</h2>
}

function Register() {
  return <h2>Register Page</h2>
}

function Navbar() {
  return (
    <nav style={{padding:10, background:"#003366", color:"white"}}>
      <Link to="/" style={{marginRight:10, color:"white"}}>Home</Link>
      <Link to="/vacancies" style={{marginRight:10, color:"white"}}>Vacancies</Link>
      <Link to="/login" style={{marginRight:10, color:"white"}}>Login</Link>
      <Link to="/register" style={{color:"white"}}>Register</Link>
    </nav>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
