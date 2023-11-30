import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Doce from './routes/Doce'
import Home from './routes/Home'
import Login from './routes/login'
import Pizza_lista from './routes/Pizza-lista'
import CadReceita from './routes/CadReceita'
import './style.css'
import CadastroForm from './routes/CadUsers'
import MassasLista from './routes/Massas-lista'
import Categorias from './routes/Categorias'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:"/login",
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
  {
    path:"/CadReceita",
    element:<CadReceita />,
  },
  {
    path:"/CadUsers",
    element:<CadastroForm />,
  },
  {
    path:"/Massas-lista",
    element:<MassasLista />,
  },
  {
    path:"/Categorias",
    element:<Categorias />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)
