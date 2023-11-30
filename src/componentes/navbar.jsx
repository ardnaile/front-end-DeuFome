import { Link } from "react-router-dom"

export default function NavBar() {
    return (
     <div className='w-screen px-3 py-4 font-extralightshadow-3xl border-y-2 bg-white mb-4'>
        <div className='mx-auto w-screen flex items-center text-start py-2 px-4 text-red-900 font-bold border-black justify-between'>
            <div className='justify-start'>
                <img className='w-36 pl-2 mr-1 cursor-pointer' src="/src/assets/imagens/icones/logo.svg" alt=""/>
            </div>
            
            <div>
                <div className='container mx-auto flex items-center justify-end px-2'>
                    <Link className="cursor-pointer text-sm sm:text-base md:text-xl lg:text-1xl hover:font-semibold font-light px-2" to="/home">Home</Link>
                    <div className='cursor-pointer text-sm sm:text-base md:text-xl lg:text-1xl hover:font-semibold font-light px-2'>Categorias</div>
                    <Link className='cursor-pointer ext-sm sm:text-base md:text-xl lg:text-1xl hover:font-semibold font-light px-2' to="/CadReceita">
                        <div>Montar Receita</div>
                    </Link>
                    <div className='cursor-pointer text-sm sm:text-base md:text-xl lg:text-1xl hover:font-semibold font-light px-2'>Receitas</div>

                    <div className='mx-10'>
                        <img className='w-10 cursor-pointer' src="/src/assets/imagens/icones/user.png" alt="usuario" />
                        <Link className="cursor-pointer text-sm sm:text-base md:text-xl lg:text-1xl hover:font-semibold" to="/login">Entrar</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}