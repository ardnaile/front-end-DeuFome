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
                    <li>1 cebola picada</li>
                    <li>1 colher de sopa de azeite de oliva</li>
                    <li>500 gramas de carne moída</li>
                    <li>2 cubos de caldo de carne ou de legumes dissolvidos em 100 ml de água</li>
                    <li>2 latas de molho de tomate pronto</li>
                    <li>2 tomates picados</li>
                    <li>5 azeitonas verdes picadas</li>
                    <li>1 cenoura cortada ao meio</li>
                    <li>500 gramas de macarrão</li>
                  </ul>
                </div>
                <div className="col-span- flex flex-col items-center justify-center mt-8 relative overflow-hidden">
                  <img
                    src="C:\Users\walla\Desktop\front-end-DeuFome\src\assets\imagens\imagensMassas\macarraoBolonhesa.jpg"
                    alt="Macarrão à bolonhesa"
                    className="border-2 mt-10 border-solid border-white"
                  />
                </div>
                <div className="col-span-3">
                  <h1 className="font-bold text-2xl text-red-900">Modo de Preparo:</h1>
                  <ol className="list-decimal ml-4">
                    <li>Reúna todos os ingredientes;</li>
                    <li>Em uma panela, refogue a cebola no azeite de oliva até dourar. Na sequência, adicione a carne moída e deixe cozinhar por alguns minutos;</li>
                    <li>Acrescente o caldo de carne (ou legumes), o molho, os tomates, as azeitonas, a cenoura e misture;</li>
                    <li>Tampe metade da penela e deixe cozinhar por cerca de 40 minutos;</li>
                    <li>Enquanto o molho cozinha, prepare o macarrão;</li>
                    <li>Assim que o molho e o macarrão estiverem prontos, misture-os e sirva em seguida. Bom apetite!</li>
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