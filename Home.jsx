import { Link } from "react-router-dom";
import NavBar from "../componentes/navbar";
import Rodape from "../componentes/rodape";
import BackgroundLayout from "../estilos/VariosBackgrounds";


export default function Home() {
  return (
    <div className="w-screen h-screen mx-auto">
      <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/Home.png')`}>
        <NavBar/>
      <div className=' container mx-auto justify-center mt-6'>
        <h1 className='font-text_ale  text-white text-start pb-2 text-8xl pt-24'> Deu Fome seu Site de Receitas!</h1> 
        <p className='font-paragrafos pt-4 pb-4 px-4 py-4 bg-white opacity-60 text-black text-3xl rounded-lg border-2'>Aqui na deu fome você consegue compartilhar suas receitas, visualizar receitas <br /> ou montar receita do zero e compartilhar com todos, quem escolhe é você.</p>   
      </div> 

      <div className='container mx-auto flex justify-center items-center space-x-6 pt-36 bg-transparent mb-10'>
        
        <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
          <Link to="/Pizza-lista" >
            <img className='hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl' src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />      
          </Link>  
        </div>

        <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
          <Link to="/Massas-lista" >
            <img className='hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/19065709/pexels-photo-19065709/free-photo-of-lanchonete-comendo-comida-alimentacao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </Link>
        </div>
        <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
          <Link to="/Doce" >
            <img className='hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </Link>
        </div>

      </div>

      <div className=' bg-white flex  justify-center items-center mb-8 pt-2'>
          <div className="mt-8">
            <img className="w-96 rounded-full border-2 shadow-lg mr-8" src="./src/assets/imagens/img-fundo/chefe.png" alt="" />
          </div>
          <div className="rounded- mt-8 mr-8">
            <h2 className="font-text_ale mt-2 text-3xl">
              Chefe Kang 
            </h2>
            <p className="mb-4 font-paragrafos">Chefe Kang nasceu na china no de 1945.<br/>Está sempre criando novas receitas e<br /> compartilhando aqui na deu fome.<br /></p>
            <p className="mb-2 font-paragrafos text-2xl">Kang sempre diz: <br /></p>
            <p className="mb-4 font-text_ale border-x-2 border-red-900 p-4">"Tudo que se move e rasteja a gente flita,<br /> tudo é comida".</p>
          </div>

          <div className="mt-8">
            <img className="w-96 rounded-full border-2 shadow-lg mr-8" src="./src/assets/imagens/img-fundo/chefe.png" alt="" />
          </div>
          <div className="rounded- mt-8 mr-8">
            <h2 className="font-text_ale mt-2 text-3xl">
              Chefe Kang 
            </h2>
            <p className="mb-4 font-paragrafos">Chefe Kang nasceu na china no de 1945.<br/>Está sempre criando novas receitas e<br /> compartilhando aqui na deu fome.<br /></p>
            <p className="mb-2 font-paragrafos text-2xl">Kang sempre diz: <br /></p>
            <p className="mb-4 font-text_ale border-x-2 border-red-900 p-4">"Tudo que se move e rasteja a gente flita,<br /> tudo é comida".</p>
          </div> 
      </div>
      </BackgroundLayout>
      <Rodape/>
    </div>
  );
};


