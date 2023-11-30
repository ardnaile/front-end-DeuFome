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
                        <img className='w-96  hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl' src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />      
                    </Link>  
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Massas-lista">
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/19065709/pexels-photo-19065709/free-photo-of-lanchonete-comendo-comida-alimentacao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/19065709/pexels-photo-19065709/free-photo-of-lanchonete-comendo-comida-alimentacao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Pizza-lista" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl' src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />      
                    </Link>  
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Massas-lista">
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/19065709/pexels-photo-19065709/free-photo-of-lanchonete-comendo-comida-alimentacao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/19065709/pexels-photo-19065709/free-photo-of-lanchonete-comendo-comida-alimentacao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/19065709/pexels-photo-19065709/free-photo-of-lanchonete-comendo-comida-alimentacao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/19065709/pexels-photo-19065709/free-photo-of-lanchonete-comendo-comida-alimentacao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/19065709/pexels-photo-19065709/free-photo-of-lanchonete-comendo-comida-alimentacao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/19065709/pexels-photo-19065709/free-photo-of-lanchonete-comendo-comida-alimentacao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/19065709/pexels-photo-19065709/free-photo-of-lanchonete-comendo-comida-alimentacao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Link>
                </div>

                <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
                    <Link to="/Doce" >
                        <img className='w-96 hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/19065709/pexels-photo-19065709/free-photo-of-lanchonete-comendo-comida-alimentacao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Link>
                </div>
       
            </div>
            <Rodape/>
            </BackgroundLayout> 
        </div>
    )
}