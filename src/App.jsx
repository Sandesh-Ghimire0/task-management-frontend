import {createBrowserRouter , Router, RouterProvider} from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Tasks from './pages/Tasks'
import Remaining from './pages/Remaining'
import Dashboard from './pages/Dashboard'

import Analytic from './pages/Analytic'
function App() {
    
    const router = createBrowserRouter([
        {
            path:'/',
            element:<MainLayout />,
            children:[
                {
                    path:'/',
                    element:<Dashboard />
                },
                {
                    path:'/tasks',
                    element:<Tasks />
                },
                {
                    path:'/remaining',
                    element:<Remaining />
                },
                {
                    path:'/analytic',
                    element:<Analytic />
                }
            ]

        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App
