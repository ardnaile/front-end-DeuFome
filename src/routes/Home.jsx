import { Link,Outlet } from "react-router-dom";
import NavBar from "../componentes/navbar";
import Rodape from "../componentes/rodape";
import BackgroundLayout from "../estilos/VariosBackgrounds";


export default function Home() {
  return (
    <div className="w-screen mx-auto">
      <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/Home.png')`}>
        <NavBar/>
      <div className='container mx-auto justify-center mb-16'>
        <h1 className='font-text_ale  text-white text-start  text-8xl  mt-16'> Deu Fome?</h1>
        <h6 className='font-text_ale text-white text-start pb-2 text-4xl'>Então, bora cozinhar! </h6> 
        <p className='font-paragrafos pt-4 pb-4 px-4 py-4 bg-white opacity-60 text-black text-3xl rounded-lg border-2'> Navegue pelo site para procurar novas receitas ou compartilhar seus conhecimentos culinários com a comunidade.</p>   
      </div> 

      <div className='container mx-auto flex justify-center items-center space-x-6 mb-8 bg-transparent'>
        
        <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
          <Link to="/Pizza-lista" >
            <img className='hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl' src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />      
          </Link>  
        </div>

        <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
          <Link to="/Massas-lista">
            <img className='hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/19065709/pexels-photo-19065709/free-photo-of-lanchonete-comendo-comida-alimentacao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </Link>
        </div>
        <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
          <Link to="/Doce" >
            <img className='hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </Link>
        </div>

      </div>

      <div className=' bg-white flex justify-center items-center mb-8 pt-2 px-10'>
          <div className="mt-8">
            <img className="w-80 rounded-full border-2 shadow-lg mr-8" src="./src/assets/imagens/img-fundo/chefe.png" alt="" />
          </div>
          <div className="rounded- mt-8 mr-8">
            <h2 className="font-text_ale mt-2 text-3xl m-3">
              Chefe Kang 
            </h2>
            <p className="ml-3 mb-4 font-paragrafos w-40 break-words">Chefe Kang nasceu na china no ano de 1945.Está sempre criando novas receitas e compartilhando aqui na deu fome.<br /></p>
            <p className="m-3 font-paragrafos text-2xl">Kang sempre diz: <br /></p>
            <p className="mb-4 font-text_ale border-l-2 border-red-900 p-2 w-50 m-2">"Tudo que se move e rasteja a gente flita, tudo é comida".</p>
          </div>

          <div className="mt-8">
            <img className="w-80 rounded-full border-2 shadow-lg mr-8" src="./src/assets/imagens/img-fundo/chefe.png" alt="" />
          </div>
          <div className="rounded- mt-8 mr-8">
            <h2 className="font-text_ale mt-2 text-3xl m-3">
              Chefe Kang 
            </h2>
            <p className="ml-3 mb-4 font-paragrafos w-40 break-words">Chefe Kang nasceu na china no ano de 1945.Está sempre criando novas receitas e compartilhando aqui na deu fome.<br /></p>
            <p className="m-3 font-paragrafos text-2xl">Kang sempre diz: <br /></p>
            <p className="mb-4 font-text_ale border-l-2 border-red-900 p-2 w-50 m-2">"Tudo que se move e rasteja a gente flita, tudo é comida".</p>
          </div> 
      </div>
      </BackgroundLayout>
      <Rodape/>
    </div>
  );
};


