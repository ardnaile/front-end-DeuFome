// Importando bibliotecas para o funcionamento do React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Importando os componentes
import App from './App'
import Doce from './routes/Doce'
import Home from './routes/Home'
import Login from './routes/login'
import Pizza_lista from './routes/Pizza-lista'
import CadReceita from './routes/CadReceita'
import CadastroForm from './routes/CadUsers'

// Importando o CSS
import './style.css'

// Importando funcionalidades de roteamento
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Criando o objeto de roteamento
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:"/login", // url
    element:<Login />, // arquivo a ser renderizado
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
  
  
]);

// Renderizando o root
// Fornecendo o contexto de roteamento
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/> 
  </React.StrictMode>
)
