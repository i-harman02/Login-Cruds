import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Layout from './component/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Profile />}/>
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login /> }/>
        </Route>
      </Routes>
    </>
  )
}

export default App
