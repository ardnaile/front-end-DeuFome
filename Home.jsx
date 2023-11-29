import { Link,Outlet } from "react-router-dom"; // Definindo rotas
import NavBar from "../componentes/navbar";
import Rodape from "../componentes/rodape";
import BackgroundLayout from "../estilos/VariosBackgrounds";


export default function Home() {
  return (
    <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/Home.png')`}>
    <div>
      <NavBar/> 
      <div className=' container mx-auto justify-center mt-6'>
        <h1 className='font-text_ale  text-white text-start pb-2 text-8xl pt-24'> Deu Fome?</h1> 
        <h2 className='font-text_ale  text-white text-start pb-2 text-4xl pt-2'> Então bora cozinhar! </h2>
        <p className='font-paragrafos pt-4 pb-4 px-4 py-4 bg-white opacity-60 text-black text-3xl rounded-lg border-2'>Crie, visualize, faça anotações e compartilhe suas receitas no site. </p>   
       </div> 
      <div className='container mx-auto flex justify-center items-center space-x-6 pt-30 bg-transparent mb-10'>
        <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
          <Link to="/Pizza-lista" >
            <img className='hover:blur-sm hover transition duration-300 cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
          </Link>
          
        </div>
        <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
          <img className='hover:blur-sm cursor-pointer shadow-3xl rounded-3xl' src="https://images.pexels.com/photos/19065709/pexels-photo-19065709/free-photo-of-lanchonete-comendo-comida-alimentacao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
          <Link to="/Doce" >
            <img className='hover:blur-sm cursor-pointer shadow-3xl rounded-3xl' src="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </Link>
        </div>
      </div>

      <div className=' bg-white w-screen font-light pt-10 pb-10 px-10 py-10 flex justify-center items-center text-baser space-x-5'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam deleniti impedit a, quod ducimus delectus! Saepe eos necessitatibus eveniet eaque, porro veritatis numquam sequi reprehenderit totam sunt nobis sed quidem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam deleniti impedit a, quod ducimus delectus! Saepe eos necessitatibus eveniet eaque, porro veritatis numquam sequi reprehenderit totam sunt nobis sed quidem.</p>
      </div>
    <Rodape/>

    
    </div>
    </BackgroundLayout>
  );
};


