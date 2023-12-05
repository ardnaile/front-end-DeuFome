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
              Cokkie Perfeito
            </div> 
          </div>

          <div className="flex justify-center">
            <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-1 gap-6 mt-4">
              <div className="bg-white border-t-4 border-red-900 rounded-xl p-6 shadow-md grid grid-cols-3 gap-6 relative h-full">
                <div className="col-span-2">
                  <h1 className="text-red-900 font-bold text-2xl">Ingredientes:</h1>
                  <ul className="list-disc ml-4">
                    <li>1 lata de Leite MOÇA;</li>
                    <li>2 xícaras (chá) de Leite Líquido NINHO® Forti+ Integral;</li>
                    <li>1 xícara (chá) de açúcar mascavo;</li>
                    <li>1 colher (chá) de canela em pó;</li>
                    <li>meia colher (chá) de cravo em pó;</li>
                    <li>meia xícara (chá) de mel;</li>
                    <li>1 xícara (chá) de Chocolate em Pó NESTLÉ® DOIS FRADES®;</li>
                    <li>2 xícaras (chá) de farinha de trigo;</li>
                    <li>2 colheres (chá) de fermento em pó;</li>
                    <li>1 colher (chá) de bicarbonato de sódio;</li>
                    <li>1 tablete de Cobertura de Chocolate ao Leite GAROTO® (500g);</li>
                  </ul>
                </div>
                <div className="col-span- flex flex-col items-center justify-center mt-8 relative overflow-hidden">
                  <img
                    src="src\assets\imagens\imagensDoce\paodemel.webp"
                    alt="Pizza 4 Queijos"
                    className="border-2 mt-10 border-solid border-white rounded-xl"
                  />
                </div>
                <div className="col-span-3">
                  <h1 className="font-bold text-2xl text-red-900">Modo de Preparo:</h1>
                  <ol className="list-decimal ml-4">
                    <li>Retire o rótulo e o excesso de cola da lata de Leite MOÇA.</li>
                    <li>Coloque-a, fechada, em uma panela de pressão e adicione água suficiente para cobri-la. </li>
                    <li>Tampe a panela e cozinhe em fogo médio por 15 minutos (contados após início da fervura).</li>
                    <li>Espere sair toda a pressão, abra a panela, retire a lata com cuidado e deixe-a esfriar antes de abri-la.</li>
                    <li>Transfira o conteúdo para um recipiente e misture para ficar homogêneo. Reserve.</li>
                    <li>Em um recipiente, misture o Leite NINHO, o açúcar mascavo, a canela, o cravo e o mel.</li>
                    <li>Peneire por cima o Chocolate em Pó NESTLÉ DOIS FRADES e a farinha de trigo.</li>
                    <li>Junte o fermento e o bicarbonato e misture tudo muito bem até obter uma massa lisa.</li>
                    <li>Despeje a massa em uma assadeira média (22 x 33 cm) untada com manteiga e polvilhada com farinha de trigo e leve ao forno médio (180°C), preaquecido, por cerca de 45 minutos.</li>
                    <li>Espere esfriar, corte a massa em quadrados e recheio com o Doce de Leite reservado.</li>
                    <li>Pique a Cobertura Chocolate GAROTO e prepare conforme as instruções da embalagem.</li>
                    <li>Banhe os pedaços de pão de mel, escorra o excesso de Chocolate e deixe-os secar sobre uma grelha.</li>
                    <li>Sirva a seguir.</li>
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

