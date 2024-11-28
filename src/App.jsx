import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Goals from './pages/goals'
import { ReactRoutes } from './constants/constants'
function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path={ReactRoutes.LOGIN} element={<Login/>} />
      <Route path={ReactRoutes.GOALS} element={<Goals/>} />
    </Routes>
</BrowserRouter>
  )
}

export default App
