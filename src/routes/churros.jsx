import { Link, Outlet } from "react-router-dom";
import NavBar from "../componentes/navbar";
import BackgroundLayout from "../estilos/VariosBackgrounds";
import Rodape from "../componentes/rodape";

export default function Pizza() {
  return (
    <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/Home.png')`}> 
    <NavBar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-transparent p-8 rounded-xl">
          
          <div className="flex justify-center">  
            <div className="text-red-900 max-w-3xl w-full font-bold text-3xl pt-4 pb-4 border-t-4 border-red-900 rounded-xl bg-white text-center">
              Churros com Chocolate
            </div> 
          </div>

          <div className="flex justify-center">
            <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-1 gap-6 mt-4">
              <div className="bg-white border-t-4 border-red-900 rounded-xl p-6 shadow-md grid grid-cols-3 gap-6 relative h-full">
                <div className="col-span-2">
                  <h1 className="text-red-900 font-bold text-2xl">Ingredientes:</h1>
                  <ul className="list-disc ml-4">
                    <li>200 g de farinha de trigo;</li>
                    <li>1 colher (chá) de sal;</li>
                    <li>1 colher (sopa) de açúcar;</li>
                    <li>275 ml de água;</li>
                    <li>1 ovo;</li>
                    <li>1 gema;</li>
                    <li>1 colher (chá) de essência de baunilha;</li>
                    <li>Óleo para fritar;</li>
                    <li>Canela em pó e açúcar para polvilhar.</li>
                  </ul>
                </div>
                <div className="col-span- flex flex-col items-center justify-center mt-8 relative overflow-hidden">
                  <img
                    src="src\assets\imagens\imagensDoce\churros.jpg"
                    alt="Pizza 4 Queijos"
                    className="border-2 mt-10 border-solid border-white rounded-xl"
                  />
                </div>
                <div className="col-span-3">
                  <h1 className="font-bold text-2xl text-red-900">Modo de Preparo:</h1>
                  <ol className="list-decimal ml-4">
                    <li>Aqueça a água em uma panela média e, quando começar a ferver, adicione ao mesmo tempo a farinha, o sal e o açúcar. Mexa bem até a massa se soltar do fundo da panela, formando uma bola. Retire a massa da panela e deixe esfriar por cerca de 10 minutos.</li>
                    <li>Em seguida, adicione aos poucos o ovo batido, a gema e a baunilha, mexendo sempre até ficar bem uniforme. Coloque a massa em um saco de confeiteiro com bico liso de 1 centímetro e esprema diretamente no óleo quente, usando uma tesoura para cortar a massa do tamanho desejado do churro.</li>
                    <li>Frite por cerca de 3 minutos, até que os churros fiquem bem dourados. Deixe escorrer e finalize polvilhando uma misturinha feita com açúcar e canela. Depois de pronto, o churro pode ser mergulhado na cobertura que você preferir, como doce de leite, brigadeiro, goiabada, entre outras.</li>
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

