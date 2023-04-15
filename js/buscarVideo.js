import { conectaApi } from "./conectaApi";
import constroiCard from "./mostrarVideos";

async function buscarVideo(evento) {
  evento.preventDefault();

  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaApi.buscaVideo(dadosDePesquisa);

  const lista = document.querySelector("[data-lista]");

  busca.forEach((element) =>
    lista.appendChild(
      constroiCard(
        element.titulo,
        element.descricao,
        element.url,
        element.imagem
      )
    )
  );
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", (evento) => buscarVideo(evento));
