import {createBrowserRouter , Router, RouterProvider} from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Tasks from './pages/Tasks'
import Completed from './pages/Completed'
import Dashboard from './pages/Dashboard'

import AiSummary from './pages/AiSummary'
import Login from './pages/Login'
import Signup from './pages/Signup'
import LandingPage from './pages/Landing'



function App() {
    
    const router = createBrowserRouter([
{
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    element: <MainLayout />,
    children: [
        {
            path:'/dashboard',
            element: <Dashboard />
        },
        {
            path: '/tasks',
            element: <Tasks />
        },
        {
            path: '/completed',
            element: <Completed />
        },
        {
            path: '/ai-summary', 
            element: <AiSummary />
        }
    ]
  }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App
