export default function () {
    return (
    <div>
        <footer className="bg-red-900 text-white p-4 text-center  ">
          <div className="flex items-start">
                 <ul className="mr-4 cursor-pointer hover:text-red-600" >quem somos</ul>
                 <ul className="mr-4 cursor-pointer hover:text-red-600" >termos de uso</ul>
                 <ul className="mr-4 cursor-pointer hover:text-red-600" >privacidade</ul>
                 <ul className="mr-4 cursor-pointer hover:text-red-600" >contato</ul>
             </div>
             <div className=" bg-red-900 flex items-center justify-center px-4 mb-8">
                 <img className="w-24" src="/src/assets/imagens/icones/icons8-facebook-100.png" alt="" /> @DeuFome
                 <img className="w-24" src="/src/assets/imagens/icones/icons8-instagram-100.png" alt="" /> @DeuFome
             </div> 
            <p>&copy; 2023 Deu Fome. Todos os direitos reservados.</p>
        </footer>
    </div>
    )
}