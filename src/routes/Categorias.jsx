import { Link } from "react-router-dom";
import NavBar from "../componentes/navbar";
import Rodape from "../componentes/rodape";
import BackgroundLayout from "../estilos/VariosBackgrounds";

export default function Categorias() {
  return (
    <div>
      <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/Home.png')`}>
        <NavBar />
        <div className="mx-auto items-center flex justify-center">
          <h1 className="text-white text-7xl font-text_ale mt-10">CATEGORIAS</h1>
        </div>
        
        <div className="container grid grid-cols-4 gap-8 mb-4 bg-transparent mx-auto">
          <div className='text-center text-white font-bold text-2xl pb-4 pt-6 relative'>
            <Link to="/Pizza-lista">
              <div className='relative w-96'>
                <img
                  className='w-full cursor-pointer shadow-3xl rounded-3xl hover:blur-sm hover:shadow-md'
                  src="src\assets\imagens\categoriaImagens\pizzaa.jpg"
                  alt="Pizza"
                />
                <p className="text-white text-6xl font-bold text-roboto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition duration-300">Pizza</p>
              </div>
            </Link>
          </div>

        <div className='text-center text-white font-bold text-2xl pb-4 pt-6 relative'>
            <Link to="/Massas-lista">
                <div className='relative w-96'>
                    <img
                        className='w-full cursor-pointer shadow-3xl rounded-3xl hover:blur-sm hover:shadow-md'
                        src="src\assets\imagens\categoriaImagens\massa.jpg"
                        alt="Massas"
                    />
                    <p className="text-white text-6xl font-bold text-roboto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition duration-300">Massas</p>
                </div>
            </Link>
        </div>

        <div className='text-center text-white font-bold text-2xl pb-4 pt-6 relative'>
            <Link to="/Doce">
              <div className='relative w-96'>
                <img
                  className='w-full cursor-pointer shadow-3xl rounded-3xl hover:blur-sm hover:shadow-md'
                  src="src\assets\imagens\categoriaImagens\docee.jpg"
                  alt="Doce"
                />
                <p className="text-white text-6xl font-bold text-roboto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition duration-300">Doce</p>
              </div>
            </Link>
          </div>

        <div className='text-center text-white font-bold text-2xl pb-4 pt-6 relative'>
              <div className='relative w-96'>
                <img
                  className='w-full cursor-pointer shadow-3xl rounded-3xl hover:blur-sm hover:shadow-md'
                  src="src\assets\imagens\categoriaImagens\saladaa.jpg"
                  alt="Salada"
                />
                <p className="text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition duration-300">Salada</p>
                </div>
        </div>

          <div className='text-center text-white font-bold text-2xl pb-4 pt-6 relative'>
                <div className='relative w-96'>
                    <img
                        className='w-full cursor-pointer shadow-3xl rounded-3xl hover:blur-sm hover:shadow-md'
                        src="src\assets\imagens\categoriaImagens\carne.jpg"
                        alt="Carne"
                        />
                        <p className="text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition duration-300">Carne</p>
                    </div>
            </div>

            <div className='text-center text-white font-bold text-2xl pb-4 pt-6 relative'>
                    <div className='relative w-96 h-64'>
                        <img
                            className='w-full cursor-pointer shadow-3xl rounded-3xl hover:blur-sm hover:shadow-md'
                            src="src\assets\imagens\categoriaImagens\sushii.jpg"
                            alt="Sushi"
                        />
                        <p className="text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition duration-300">Sushi</p>
                    </div>
            </div>

            <div className='text-center text-white font-bold text-2xl pb-4 pt-6 relative'>
                    <div className='relative w-96'>
                        <img
                            className='w-full cursor-pointer shadow-3xl rounded-3xl hover:blur-sm hover:shadow-md'
                            src="src\assets\imagens\categoriaImagens\peixe.jpg"
                            alt="Peixe"
                        />
                        <p className="text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition duration-300">Peixe</p>
                    </div>
            </div>

            <div className='text-center text-white font-bold text-2xl pb-4 pt-6 relative'>
                <div className='relative w-96'>
                    <img
                            className='w-full cursor-pointer shadow-3xl rounded-3xl hover:blur-sm hover:shadow-md'
                            src="src\assets\imagens\categoriaImagens\cerveja.jpg"
                            alt="Cerveja"
                        />
                        <p className="text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition duration-300">Cerveja</p>
                    </div>
            </div>

            <div className='text-center text-white font-bold text-2xl pb-4 pt-6 relative'>
                    <div className='relative w-96'>
                        <img
                            className='w-full cursor-pointer shadow-3xl rounded-3xl hover:blur-sm hover:shadow-md'
                            src="src\assets\imagens\categoriaImagens\sopa.jpg"
                            alt="Sopa"
                        />
                        <p className="text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition duration-300">Sopa</p>
                    </div>
            </div>

            <div className='text-center text-white font-bold text-2xl pb-4 pt-6 relative'>
                    <div className='relative w-96'>
                        <img
                            className='w-full cursor-pointer shadow-3xl rounded-3xl hover:blur-sm hover:shadow-md'
                            src="src\assets\imagens\categoriaImagens\hamburguer.jpg"
                            alt="Hambúrguer"
                        />
                        <p className="text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition duration-300">Hambúrguer</p>
                    </div>
            </div>

            <div className='text-center text-white font-bold text-2xl pb-4 pt-6 relative'>
                    <div className='relative w-96'>
                        <img
                            className='w-full cursor-pointer shadow-3xl rounded-3xl hover:blur-sm hover:shadow-md'
                            src="src\assets\imagens\categoriaImagens\panquecas.jpg"
                            alt="Panquecas"
                        />
                        <p className="text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition duration-300">Panqueca</p>
                    </div>
            </div>

            <div className='text-center text-white font-bold text-2xl pb-4 pt-6 relative'>
                    <div className='relative w-96'>
                        <img
                            className='w-full cursor-pointer shadow-3xl rounded-3xl hover:blur-sm hover:shadow-md'
                            src="src\assets\imagens\categoriaImagens\frutosMar.jpg"
                            alt="Frutos do Mar"
                        />
                        <p className="text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition duration-300">Frutos do Mar</p>
                    </div>
            </div>
       
            </div>
            <Rodape/>
            </BackgroundLayout> 
        </div>
    )
}