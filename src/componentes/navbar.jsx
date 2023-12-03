import { Link } from "react-router-dom"

export default function NavBar() {
    return (
     <nav className='relative'>
        <div className='w-screen mx-auto px-3 py-4 font-extra lights shadow-3xl  bg-white flex  items-center '>
            <img className='w-36 p-3 cursor-pointer' src="/src/assets/imagens/icones/logo.svg" alt=""/>
            <Link to="/Home">
                <ul className="mr-4 cursor-pointer text-xl hover:text-red-900 hover:font-semibold" >Home</ul>
            </Link>
            <Link to="/Categorias">
                <ul className="mr-4 cursor-pointer text-xl hover:text-red-900 hover:font-semibold">Categorias</ul>
            </Link>
            <Link to="/CadReceita">
                <ul className="mr-4 cursor-pointer text-xl hover:text-red-900 hover:font-semibold">Montar receita</ul>
            </Link>
            <Link to="/Home">
                <ul className="mr-4 cursor-pointer text-xl hover:text-red-900 hover:font-semibold">Receitas</ul> 
            </Link>
            <div className="mx-auto flex items-center justify-center">
                <input className="px-2 py-2 text-2xl rounded-2xl transition duration-200 ease-in-out focus:outline-none bg-gray-50 border border-gray-800  w-96" type="text" placeholder="Pesquisar receitas" />   
                <img className="w-12 mr-16" src="/src/assets/imagens/icones/search.svg" alt="" />
                
            </div>

            <div className="flex justify-end items-center px-6">
                <ul className="mr-4 cursor-pointer  text-xl hover:text-red-900 hover:font-semibold">Nome do usuario</ul>
                <Link to="/login">
                    <img className='w-14 cursor-pointer ' src="/src/assets/imagens/icones/user.png" alt="usuario" />
                </Link>
            </div>
                    

                    {/* <Link className="cursor-pointer text-sm sm:text-base md:text-xl lg:text-1xl hover:font-semibold font-light px-2" to="/home">Home</Link>
                    <div className='cursor-pointer text-sm sm:text-base md:text-xl lg:text-1xl hover:font-semibold font-light px-2'>Categorias</div>
                    <Link className='cursor-pointer ext-sm sm:text-base md:text-xl lg:text-1xl hover:font-semibold font-light px-2' to="/CadReceita">
                        <div>Montar Receita</div>
                    </Link>
                    <div className='cursor-pointer text-sm sm:text-base md:text-xl lg:text-1xl hover:font-semibold font-light px-2'>Receitas</div>

                    <div className='mx-10'>
                        <img className='w-10 cursor-pointer' src="/src/assets/imagens/icones/user.png" alt="usuario" />
                        <Link className="cursor-pointer text-sm sm:text-base md:text-xl lg:text-1xl hover:font-semibold" to="/login">Entrar</Link>
                    </div> */}
               
         
        </div>
      </nav>
    )
}