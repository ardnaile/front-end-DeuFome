import { Link,Outlet } from "react-router-dom";
import NavBar from "../componentes/navbar";

export default function Home() {
  return (
    <body>
      <NavBar/>
      <Outlet/>    
      <div className=' container mx-auto justify-center mt-6'>
        <h1 className='font-bold  text-white text-start pb-2 text-7xl pt-24'> Deu Fome seu Site de Receitas!</h1> 
        <p className='font-light pt-4 pb-4 px-4 py-4 text-white text-3xl rounded-lg border-2 border-white'>Aqui na deu fome você consegue compartilhar suas receitas, visualizar a receita <br />de um amigo ou montar uma receita do zero, quem escolhe é você.</p>   
       </div>   no
    
      <div className='container mx-auto flex justify-center items-center space-x-6 pt-36 bg-transparent mb-10'>
        <div className='text-center text-white font-bold text-2xl pb-4 pt-6'> 
          <Link to="/Pizza" >
            <img  className='hover:blur-sm cursor-pointer shadow-3xl rounded-3xl ' src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </Link>
        </div>
        <div className='text-center text-white font-bold text-2xl pb-4'> 
          <img className='hover:blur-sm cursor-pointer shadow-3xl rounded-3xl' src="https://images.pexels.com/photos/19065709/pexels-photo-19065709/free-photo-of-lanchonete-comendo-comida-alimentacao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='text-center text-white font-bold text-2xl pb-4'> 
          <Link to="/Doce" >
            <img className='hover:blur-sm cursor-pointer shadow-3xl rounded-3xl' src="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </Link>
        </div>
      </div>

      <div className=' bg-white w-screen font-light pt-10 pb-10 px-10 py-10 flex justify-center items-cente text-baser'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam deleniti impedit a, quod ducimus delectus! Saepe eos necessitatibus eveniet eaque, porro veritatis numquam sequi reprehenderit totam sunt nobis sed quidem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam deleniti impedit a, quod ducimus delectus! Saepe eos necessitatibus eveniet eaque, porro veritatis numquam sequi reprehenderit totam sunt nobis sed quidem.</p>
      </div>

      <div className='flex justify-center items-center text-center w-screen space-x-6 pt-20 pb-2 px-2 bg-white'>
        <div>
          <img src="/src/assets/imagens/icons8-facebook-100.png" alt="" /> Facebook
        </div>
        <div>
          <img src="/src/assets/imagens/icons8-instagram-100.png" alt="" /> Instagram
        </div>
    
      </div>
    </body>
  );
};



{/* <div className='text-center text-white font-bold text-2xl pb-4'> 
<img className='cursor-pointer text-white shadow-3xl rounded-3xl' src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
</div>

<div className='text-center text-white font-bold text-2xl pb-4'> 
<img className='cursor-pointer shadow-3xl rounded-3xl' src="https://images.pexels.com/photos/19065709/pexels-photo-19065709/free-photo-of-lanchonete-comendo-comida-alimentacao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
</div>
<div className='text-center text-white font-bold text-2xl pb-4'> 
<img className='cursor-pointer shadow-3xl rounded-3xl' src="/src/assets/imagens/criar.png" alt="" />
</div> */}