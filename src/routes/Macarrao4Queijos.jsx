import { Link, Outlet } from "react-router-dom";
import NavBar from "../componentes/navbar";
import BackgroundLayout from "../estilos/VariosBackgrounds";
import Rodape from "../componentes/rodape";

export default function Pizza() {
  return (
    <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/Home.png')`}> 
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-transparent p-8 rounded-xl">
          <NavBar />
          <Outlet />
          <div className="flex justify-center">  
            <div className="text-red-900 max-w-3xl w-full font-bold text-3xl pt-4 pb-4 border-t-4 border-red-900 rounded-xl bg-white text-center">
              Macarrão à Bolonhesa
            </div> 
          </div>

          <div className="flex justify-center">
            <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-1 gap-6 mt-4">
              <div className="bg-white border-t-4 border-red-900 rounded-xl p-6 shadow-md grid grid-cols-3 gap-6 relative h-full">
                <div className="col-span-2">
                  <h1 className="text-red-900 font-bold text-2xl">Ingredientes:</h1>
                  <ul className="list-disc ml-4">
                    <li>250 gramas de macarrão (de sua preferência)</li>
                    <li>1 colher de sopa de manteiga sem sal</li>
                    <li>1/2 xícara de chá de leite</li>
                    <li>1 caixinha de creme de leite</li>
                    <li>1/2 xícara de chá de queijo gorgonzola</li>
                    <li>1 xícara de chá de queijo prato</li>
                    <li>1 xícara de chá de queijo provolone</li>
                    <li>1 xícara de chá de queijo parmesão</li>
                    <li>Noz-moscada a gosto</li>
                    <li>Pimenta-do-reino a gosto</li>
                  </ul>
                </div>
                <div className="col-span- flex flex-col items-center justify-center mt-8 relative overflow-hidden">
                  <img
                    src="src\assets\imagens\imagensMassas\MacarraoQueijo.jpg"
                    alt="Macarrão 4 Queijos"
                    className="rounded-xl border-2 mt-10 border-solid border-white"
                  />
                </div>
                <div className="col-span-3">
                  <h1 className="font-bold text-2xl text-red-900">Modo de Preparo:</h1>
                  <ol className="list-decimal ml-4">
                    <li>Coloque o macarrão para cozinhar numa panela com sal e água;</li>
                    <li>Em uma panela, derreta a manteiga em fogo baixo;</li>
                    <li>Adicione o leite, o creme de leite e mexa bem até quase começar a ferver;</li>
                    <li>Acrescente todos os queijos, a noz-moscada, a pimenta e mexa bem até os queijos derreterem;</li>
                    <li>Desligue o fogo e misture o molho com o macarrão já cozido e escorrido;</li>
                    <li>Agora é só servir. Bom apetite!</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Rodape/>
    </BackgroundLayout>
  );
}