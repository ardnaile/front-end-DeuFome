// Componente rodapé
// Melhor reaproveitamento de código
export default function () {
    return (
    <div className='flex justify-center items-center text-center mx-auto  w-screen space-x-6 pt-20 pb-2 px-2 bg-white'>
        <h1 className="font-paragrafos">Acompanhe a deuFome! nas redes sociais</h1>
            <div className="font-paragrafos cursor-pointer">
                <img src="/src/assets/imagens/icones/icons8-facebook-100.png" alt="" /> @deuFome?
            </div>
            <div className="font-paragrafos cursor-pointer"> 
                <img src="/src/assets/imagens/icones/icons8-instagram-100.png" alt="" /> @deuFome?
            </div>
    </div>
    )
}