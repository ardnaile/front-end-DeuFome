export default function () {
    return (
    <div className='mx-auto p-4  w-screen pt-10 bg-white border-t-2'>
   
            <div className="flex">
                <ul className="mr-4 cursor-pointer hover:text-red-600" >quem somos</ul>
                <ul className="mr-4 cursor-pointer hover:text-red-600" >termos de uso</ul>
                <ul className="mr-4 cursor-pointer hover:text-red-600" >privacidade</ul>
                <ul className="mr-4 cursor-pointer hover:text-red-600" >contato</ul>
            </div>
            <div className="flex items-center justify-center px-4">
                <img className="w-24" src="/src/assets/imagens/icones/icons8-facebook-100.png" alt="" /> @deuFome?
                <img className="w-24" src="/src/assets/imagens/icones/icons8-instagram-100.png" alt="" /> @deuFome?
            </div>            
    </div>
    )
}