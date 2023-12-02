import { Link } from "react-router-dom";
import NavBar from "../componentes/navbar";
import Rodape from "../componentes/rodape";
import BackgroundLayout from "../estilos/VariosBackgrounds";

export default function Categorias () {
    return (
        <div>
            <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/Home.png')`}>
            <NavBar/>
            <div className="mx-auto items-center flex justify-center ">
                <h1 className="text-white text-7xl font-text_ale mt-10">CATEGORIAS</h1>
            </div>
            <div className='container mx-auto grid grid-cols-4 justify-center items-center  mb-8 bg-transparent'>
                
                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Pizza-lista" >
                        <img className='w-96  hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl' src="src\assets\imagens\categoriaImagens\pizzaa.jpg" alt="" />      
                    </Link>  
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Massas-lista">
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="src\assets\imagens\categoriaImagens\massa.jpg" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="src\assets\imagens\categoriaImagens\docee.jpg" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Pizza-lista" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl' src="src\assets\imagens\categoriaImagens\saladaa.jpg" alt="" />      
                    </Link>  
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Massas-lista">
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="src\assets\imagens\categoriaImagens\carne.jpg" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96 h-64 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="src\assets\imagens\categoriaImagens\sushii.jpg" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96  hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="src\assets\imagens\categoriaImagens\peixe.jpg" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="src\assets\imagens\categoriaImagens\cerveja.jpg" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="src\assets\imagens\categoriaImagens\sopa.jpg" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="src\assets\imagens\categoriaImagens\hamburguer.jpg" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="src\assets\imagens\categoriaImagens\panquecas.jpg" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="src\assets\imagens\categoriaImagens\frutosMar.jpg" alt="" />
                    </Link>
                </div>
       
            </div>
            <Rodape/>
            </BackgroundLayout> 
        </div>
    )
}