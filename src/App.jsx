import {createBrowserRouter , Router, RouterProvider} from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Tasks from './pages/Tasks'
import Remaining from './pages/Remaining'
import Dashboard from './pages/Dashboard'

import Analytic from './pages/Analytic'
import Login from './pages/Login'
import Signup from './pages/SIgnup'
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
            path: '/remaining',
            element: <Remaining />
        },
        {
            path: '/analytic', 
            element: <Analytic />
        }
    ]
  }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App
