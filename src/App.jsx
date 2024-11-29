import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Goals from './pages/goals'
import { ReactRoutes } from './constants/constants'
import { useState } from 'react';
function App() {
  const [email,setEmail] = useState("");
  const getEmail = () =>{
    return email;
  }

  const setemail = (mail) =>{
    setEmail(mail);
  }
  
  return (
<BrowserRouter>
    <Routes>
      <Route path={ReactRoutes.LOGIN} element={<Login setemail={setemail}/>} />
      <Route path={ReactRoutes.GOALS} element={<Goals getEmail={getEmail} />} />
    </Routes>
</BrowserRouter>
  )
}

export default App
