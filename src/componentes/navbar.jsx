import { Link } from "react-router-dom"

export default function NavBar() {
    return (
     <div className='w-screen px-2 pt-4 pb-4 font-extralightshadow-3xl border-y-2 bg-white mb-4'>
        <div className='mx-auto flex items-center text-start space-x-6 pt-2 pb-2 px-4 text-red-900  font-bold border-black justify-center'>
            <img className='w-36 pl-2 mr-4 cursor-pointer justify-start' src="/src/assets/imagens/icones/logo.svg" alt="" />
            <img className='w-10 cursor-pointer justify-start' src="/src/assets/imagens/icones/user.png" alt="usuario" />
            <Link className="cursor-pointer text-sm sm:text-base md:text-xl lg:text-1xl hover:font-semibold" to="/login">Entrar</Link>
            <div className='container mx-auto flex items-start justify-end px-2'>
                <Link className="cursor-pointer text-sm sm:text-base md:text-xl lg:text-1xl hover:font-semibold font-light px-2" to="/home">Home</Link>
                <div className='cursor-pointer text-sm sm:text-base md:text-xl lg:text-1xl hover:font-semibold font-light px-2'>Categorias</div>
                <Link className='cursor-pointer ext-sm sm:text-base md:text-xl lg:text-1xl hover:font-semibold font-light px-2' to="/CadReceita">
                    <div>Montar Receita</div>
                </Link>
                <div className='cursor-pointer text-sm sm:text-base md:text-xl lg:text-1xl hover:font-semibold font-light px-2'>Receitas</div>
            </div>
        </div>
      </div>
    )
}