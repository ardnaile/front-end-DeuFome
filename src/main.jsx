import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Doce from './routes/Doce'
import Home from './routes/Home'
import Login from './routes/login'
import Pizza_lista from './routes/Pizza-lista'
import './style.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:"/Login",
    element:<Login />,
  },
  {
    path:"/Home",
    element:<Home />,
  },      
  {
    path:"/Pizza-lista",
    element:<Pizza_lista/>,
  },
  {
    path:"/Doce",
    element:<Doce />,
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)
