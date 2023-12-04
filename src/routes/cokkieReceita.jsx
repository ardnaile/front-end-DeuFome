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
              Cokkie Perfeito
            </div> 
          </div>

          <div className="flex justify-center">
            <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-1 gap-6 mt-4">
              <div className="bg-white border-t-4 border-red-900 rounded-xl p-6 shadow-md grid grid-cols-3 gap-6 relative h-full">
                <div className="col-span-2">
                  <h1 className="text-red-900 font-bold text-2xl">Ingredientes:</h1>
                  <ul className="list-disc ml-4">
                    <li>200g de manteiga;</li>
                    <li>140g de açúcar;</li>
                    <li>95g de açúcar mascavo;</li>
                    <li>85g de ovos;</li>
                    <li>Pitada de sal;</li>
                    <li>1 colher de café de baunilha;</li>
                    <li>300g de farinha de trigo;</li>
                    <li>5g de bicarbonato de sódio;</li>
                    <li>300g de chocolate meio amargo em pedaços.</li>
                  </ul>
                </div>
                <div className="col-span- flex flex-col items-center justify-center mt-8 relative overflow-hidden">
                  <img
                    src="src\assets\imagens\imagensDoce\cookies.jpg"
                    alt="Pizza 4 Queijos"
                    className="border-2 mt-10 border-solid border-white rounded-xl"
                  />
                </div>
                <div className="col-span-3">
                  <h1 className="font-bold text-2xl text-red-900">Modo de Preparo:</h1>
                  <ol className="list-decimal ml-4">
                    <li>Peneire a farinha de tricô e o bicarbonato de sódio, reserve; Bata a manteiga (pomada) com os açúcares por 1 minuto; Agregue a baunilha e os ovos em duas etapas; Acrescente de uma só vez a farinha peneirada com o bicarbonato e bata somente até incorporar; Por último adicione os pedaços de chocolate.</li>
                    <li>Em uma assadeira reta coberta com um papel manteiga ou silpat, modele os cookies formando bolas do tamanho desejado. Asse a 160 graus por aproximadamente 10 minutos. </li>
                    <li>Dica: Os ingredientes do cookie podem ser misturados à mão ou na batedeira. Caso opte pela batedeira, use a raquete para bater esta massa.</li>
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

