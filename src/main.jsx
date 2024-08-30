import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage'
import Dashboardpage from './routes/dashboarpage/Dashboardpage'
import Chatpage from './routes/chatpage/Chatpage'
import Rootlayout from './layouts/rootLayout/Rootlayout'
import Dashboardlayout from './layouts/dashboardLayout/Dashboardlayout'
import Signinpage from './routes/signinpage/Signinpage'
import Signuppage from './routes/signuppage/Signuppage'






const router = createBrowserRouter([
  {
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/sign-in/*",
        element: <Signinpage />
      },
      {
        path: "/sign-up",
        element: <Signuppage />
      },
      {
        element: <Dashboardlayout />,
        children:[
          {
            path: "/dashboard",
            element: <Dashboardpage />
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chatpage />
          }
        ]
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
