import {Link} from "react-router-dom";
import Rodape from "../componentes/rodape";
import BackgroundLayout from "../estilos/VariosBackgrounds";
import NavBar from "../componentes/navbar";

export default function Perfil (){

    return(
        <div label='div-maior'>
        <NavBar/>
        <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/Home.png')`}>
        
        <div className='flex items-center justify-center h-screen w-screen'>
            <div label='div-botoes' className='bg-white rounded-xl flex flex-col items-center h-80 w-80 justify-center'>
                <h1 className='font-text_ale text-red-900 text-4xl mb-8'>Olá, Usuário!</h1>
                <button className='bg-red-900 text-white w-40 py-2 m-2 rounded-xl text-xl hover:bg-white hover:text-red-900 hover:border-2'> Salvos </button>
                <button className='bg-red-900 text-white w-40 py-2 m-2 rounded-xl text-xl hover:bg-white hover:text-red-900 hover:border-2'> Configurações </button>
                <button className='bg-red-900 text-white w-40 py-2 m-2 rounded-xl text-xl hover:bg-white hover:text-red-900 hover:border-2'> Sair </button>
            </div>
        </div>
        
        </BackgroundLayout>
        <Rodape/>
        </div>

    );
};