import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './main/Root';
import Home from './Pagaes/Home';
import Unitmember from './Pagaes/Unitmember';
import About from './Pagaes/About';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children: [
      {
        path: "/",
        element:<Home />,
      },
      {
        path: "/unit",
        element:<Unitmember></Unitmember>,
      },
      {
        path: "/about",
        element:<About></About>,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
