import {createBrowserRouter , Router, RouterProvider} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

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

    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
    )
}

export default App
