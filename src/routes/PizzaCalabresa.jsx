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
              Pizza de Calabresa
            </div> 
            <button>SALVAR</button>
          </div>

          <div className="flex justify-center">
            <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-1 gap-6 mt-4">
              <div className="bg-white border-t-4 border-red-900 rounded-xl p-6 shadow-md grid grid-cols-3 gap-6 relative h-full">
                <div className="col-span-2">
                  <h1 className="text-red-900 font-bold text-2xl">Ingredientes:</h1>
                  <ul className="list-disc ml-4">
                  <li>Pique a linguiça em pedaços pequenos.</li>
                    <li>1 colher (sopa) de Azeite de oliva extravirgem.</li>
                    <li>1 unidade de Massa para pizza Massa Leve.</li>
                    <li>5 colheres (sopa) de Molho de tomate caseiro (tomate, cebola e/ou alho).</li>
                    <li>100 gramas de Palmito, juçara, em conserva.</li>
                    <li>250 gramas de Queijo muçarela.</li>
                    <li>100 gramas de tomate.</li>
                    <li>100 gramas de batata palha.</li>
                    <li>Orégano seco à gosto.</li>
                  </ul>
                </div>
                <div className="col-span- flex flex-col items-center justify-center mt-8 relative overflow-hidden">
                  <img
                    src="/src/assets/imagens/imagensPizza/calabresa.png"
                    alt="Pizza de Calabresa"
                    className="border-2 mt-10 border-solid border-white"
                  />
                </div>
                <div className="col-span-3">
                  <h1 className="font-bold text-2xl text-red-900">Modo de Preparo:</h1>
                  <ol className="list-decimal ml-4">
                  <li>Em um recipiente, coloque a farinha peneirada, o fermento e o sal e misture.</li>
                    <li>Faça uma cova no centro e acrescente a água e o óleo.</li>
                    <li>Amasse bem e abra com o rolo, formando uma massa lisa.</li>
                    <li>Unte uma forma para pizza (média) e modele a massa dentro.</li>
                    <li>Despeje sobre a massa um pouco de molho de tomate, espalhe a linguiça e cubra com cebola.</li>
                    <li>Decore com azeitonas, tempere com orégano e leve ao forno médio (180°C) preaquecido por 20 minutos, ou até a massa ficar assada.</li>
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