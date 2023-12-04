import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Doce from './routes/Doce-lista'
import Home from './routes/Home'
import Login from './routes/login'
import Pizza_lista from './routes/Pizza-lista'
import CadReceita from './routes/CadReceita'
import './style.css'
import CadastroForm from './routes/CadUsers'
import MassasLista from './routes/Massas-lista'
import Categorias from './routes/Categorias'
import Receitas from './routes/Receitas-lista'
import ReceitaExibe from './routes/Receitas-exibe'
import Pizza from './routes/PizzaCalabresa'
import PizzaBacon from './routes/PizzaBacon'
import Pizzaquatroqueijos from './routes/PizzaFourQueijos'
import Macarraoabolonhesa from './routes/MacarraoBolonhese'
import Macarraoquatroqueijos from './routes/Macarrao4Queijos'
import MacarraocomSalsicha from './routes/MacarraoSalsicha'
import Perfil from './routes/Perfil'
import ChurroscomChocolate from './routes/churros'
import Cokkieperfeito from './routes/cokkieReceita'
import Paozinhodemel from './routes/PaodeMel'

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
  {
    path:"/Receitas-lista",
    element:<Receitas />,
  },
  {
    path:"/receitas/:id",
    element:<ReceitaExibe />,
  },
  {
    path:"/PizzaCalabresa",
    element:<Pizza/>,
  },
  {
    path:"/PizzaBacon",
    element:<PizzaBacon/>,
  },
  {
    path:"/PizzaFourQueijos",
    element:<Pizzaquatroqueijos/>,
  },
  {
    path:"/MacarraoBolonhese",
    element:<Macarraoabolonhesa/>,
  },
  {
    path:"/Macarrao4Queijos",
    element:<Macarraoquatroqueijos/>,
  },
  {
    path:"/MacarraoSalsicha",
    element:<MacarraocomSalsicha/>,
  },
  {
    path:"/Perfil",
    element:<Perfil/>,
  },
  {
    path:"/churros",
    element:<ChurroscomChocolate/>,
  },
  {
    path:"/cokkieReceita",
    element:<Cokkieperfeito/>,
  },
  {
    path:"/PaodeMel",
    element:<Paozinhodemel/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)

