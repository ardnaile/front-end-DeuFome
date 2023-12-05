import { useState } from "react";
import Rodape from "../componentes/rodape";
import NavBar from "../componentes/navbar";

export default function Receitas() {

  const [divs,setDivs] = useState([
    {id: 1,nome: "Pizza Banana com Chocolate"},
    {id: 2,nome: "Pizza Banana Nevada"},
    {id: 3,nome: "Feijoada"},
    {id: 4,nome: "Arroz de forno"},
    {id: 5,nome: "Pão com ovo de calopsita"},
    {id: 6,nome: "Pizza do cirilo"},
    {id: 7,nome: "Café gourmet"},
    {id: 8,nome: "Macarrão japones ou famoso miojo com tang"},
    {id: 9,nome: "Pizza de alface"},
  ]);

  const [filteredDivs, setFilteredDivs] = useState(divs);

  const handleDeletar = (id, nome) => {
    const novasDivs = divs.filter((div) => div.id !== id);
    setDivs(novasDivs);
    setFilteredDivs(novasDivs);
    alert(`A receita "${nome}" foi deletada.`);
  };
 
  const handleEditar = () => {
    alert("Essa função ainda não esta disponivel")
  };

  const handlePesquisar = (termo) => {
    // Filtra as receitas com base no ID
    const resultadoPesquisa = divs.filter((div) =>
      div.id.toString().includes(termo)
    );
    setFilteredDivs(resultadoPesquisa);
  };
 

  return (
    <div className="w-screen h-screen grid items-center justify-center">
      <NavBar onPesquisar={handlePesquisar} />
      <div className="items-center justify-center flex mt-4">
        <h1 className="mb-5 text-3xl font-semibold  text-red-900">Suas Receitas</h1>
      </div>
      <div className=" mx-auto bg-white p-4  h-screen border-x-2 border-red-900 shadow-md rounded-md  space-y-5  mb-80 ">
      {filteredDivs.map((div) => (
        <div key={div.id} className="">
          <h1 className=" text-red-900 font-bold text-2xl">{div.nome}</h1>
          <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-48 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
          <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-48 ml-2 text-white px-4 pt-2 py-2 mb-4 mt-4'>Compartilhar</button>
          <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-48 ml-2 text-white px-4 pt-2 py-2 mb-4 mt-4' onClick={handleEditar}>Editar</button> 
          <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-48 ml-2 text-white px-4 pt-2 py-2 mb-4 mt-4' onClick={() => handleDeletar(div.id,div.nome)}>Deletar receita</button> 
        </div>
        ))} 
      </div>
      <Rodape/>
    </div>
  );
}


