export default function Doce () {
    return(
      <div className="p-8 bg-gray-200">
        <div className="text-red-900 font-bold text-2xl pt-0 pl-4 pr-4 pb-4 border-t-4 border-red-900 rounded-xl bg-white">
          Doces
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 shadow-md rounded-md grid grid-cols-3 gap-4 relative">
            <div className="col-span-2">
              <h1 className="text-red-900 font-bold text-2xl">Ingredientes:</h1>
              <ul className="list-disc ml-4">
                <li>200 gramas de creme de leite</li>
                <li>100 gramas de coco ralado seco</li>
                <li>200ml leite de coco</li>
                <li>Adoçante a gosto</li>
                <li>Coco ralado a gosto para enrolar</li>
                <li>Cravo da índia a gosto para finalizar</li>
              </ul>
            </div>
            <div className="col-span-1 flex flex-col items-center justify-center mt-8 relative">
              <h2 className=" text-red-900 absolute top-0 font-bold text-2xl">Beijinho</h2>
              <img
                src="https://cdn.awsli.com.br/600x450/1837/1837006/produto/229963683/trufa-de-chocolate-branco-com-limao--2--5if5ocur1c.png"
                width="650"
                height="850"
                alt="Beijinho"
                className="mt-10"
                class="mt-10 border-2 border-solid border-gray-400 rounded-md hover:border-blue-500 transition duration-300 ease-in-out"
              />
            </div>
            <div className="col-span-3">
              <h1 className="font-bold text-2xl text-red-900 ">Modo de Preparo:</h1>
              <ol className="list-decimal ml-4">
                <li>Reúna todos os ingredientes;</li>
                <li>Em uma panela, adicione o creme de leite, o coco ralado, o leite de coco, misture bem e deixe cozinhar, mexendo sempre, até incorporar;</li>
                <li>Acrescente o adoçante (a quantidade que desejar), misture, transfira para um prato e leve para geladeira para gelar;</li>
                <li>Enrole os beijinhos, passe no coco ralado e coloque o cravo por cima;</li>
              </ol>
            </div>
          </div>
  
          
          <div className="bg-white p-4 shadow-md rounded-md">Doce 2</div>
          <div className="bg-white p-4 shadow-md rounded-md">Doce 3</div>
          <div className="bg-white p-4 shadow-md rounded-md">Doce 4</div>
        </div>
      </div>
    )
  }
