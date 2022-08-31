//Inserindo os cards
window.addEventListener("load", () => {
  criarCabecalho();
  let main = document.querySelector("main");
  //  Criando a section
  var sectionCriada = document.createElement("section");
  sectionCriada.setAttribute("class", "container-fluid row row-cols-3 justify-content-around")
  sectionCriada.setAttribute("id", "section-cards")
  main.appendChild(sectionCriada)
  criarCardsAgricolas();
  criarCardsJardim();
  menuMobile();
})

//Array de plantas agricolas
var agricolas = ["MILHO", "SOJA", "TRIGO", "ALFACE", "CAFE", "CANA-DE-AÇUCAR",];

//Array de plantas de jardim
var jardim = ["CLUSIA", "COSMOS", "FLAMBOYANT", "HELICONIA-PAPAGAIO", "IRIS-AMARELO", "AGAVE"]

function criarCabecalho(){

  //CRIANDO AS TAGS E ATRIBUTOS
  let header = document.getElementById("header");
  let imgHeader= document.createElement("img");
  let ulHeader = document.createElement("ul");
  let liINICIO = document.createElement("li");
  let liIAgricola = document.createElement("li");
  let liJardim = document.createElement("li");
  ulHeader.setAttribute("class","list-group list-group-horizontal")
  imgHeader.setAttribute("id","logo");
  imgHeader.src="./images/BD-PLANTAS.png"

  liINICIO.setAttribute("class","list-group-item")
  liIAgricola.setAttribute("class","list-group-item")
  liJardim.setAttribute("class","list-group-item")

  liIAgricola.setAttribute("id","agricola")
  liJardim.setAttribute("id","jardim")

  liINICIO.setAttribute("onclick","paginaInicial()")
  liIAgricola.setAttribute("onclick","exibirAgricolas()")
  liJardim.setAttribute("onclick","exibirJardim()")

//CRIANDO OS TEXTOS
liINICIO.innerText="Inicio"
liIAgricola.innerText="Agricolas"
liJardim.innerText="Jardim"
  //INSERINDO AS TAGS NA PÁGINA
  ulHeader.appendChild(liINICIO)
  ulHeader.appendChild(liIAgricola)
  ulHeader.appendChild(liJardim)

  header.appendChild(imgHeader)
  header.appendChild(ulHeader)  
}
//Criação dos cards de plantas de jardim
function criarCardsJardim() {
  for (let pos in jardim) {
    let section = document.getElementById("section-cards");
    let divPAI = document.createElement("div");
    let divFILHO = document.createElement("div");
    let pTITULO = document.createElement("p");
    let spanTIPO = document.createElement("span");
    divPAI.setAttribute("id", `card-${pos}`);
    divPAI.setAttribute("class", "card-plant mb-5 position-relative");
    divPAI.setAttribute("style", "width:18rem; height: 250px;");
    divPAI.style.backgroundImage = `url(./images/${jardim[pos]}.jpg)`;
    divFILHO.setAttribute("class", "position-absolute card-info");
    pTITULO.setAttribute("class", "h2 text-center");
    pTITULO.innerText = jardim[pos];
    spanTIPO.setAttribute("class", "span-type position-absolute");
    divFILHO.appendChild(pTITULO);
    divFILHO.appendChild(spanTIPO);
    divPAI.appendChild(divFILHO);
    section.appendChild(divPAI);
    if (jardim[pos]) {
      spanTIPO.innerText = "Jardim";
    }
  }
}

//Criação dos cards de plantas agricolas
function criarCardsAgricolas() {
  for (let pos in agricolas) {
    let section = document.getElementById("section-cards");
    let divPAI = document.createElement("div");
    let divFILHO = document.createElement("div");
    let pTITULO = document.createElement("p");
    let spanTIPO = document.createElement("span");
    divPAI.setAttribute("id", `card-${pos}`);
    divPAI.setAttribute("class", "card-plant mb-5 position-relative");
    divPAI.setAttribute("style", "width:18rem; height: 250px;");
    divPAI.style.backgroundImage = `url(./images/${agricolas[pos]}.jpg)`;
    divFILHO.setAttribute("class", "position-absolute card-info");
    pTITULO.setAttribute("class", "h2 text-center");
    pTITULO.innerText = agricolas[pos];
    spanTIPO.setAttribute("class", "span-type position-absolute");

    divFILHO.appendChild(pTITULO);
    divFILHO.appendChild(spanTIPO);
    divPAI.appendChild(divFILHO);
    section.appendChild(divPAI);
    if (agricolas[pos]) {
      spanTIPO.innerText = "Agrícola";
    }
  }
}
function menuMobile(){
  //criando footer
  let footer = document.querySelector(".footer");

  //criando divs base
  let baseMenu= document.createElement("div");
  let agricolasMenu = document.createElement("div");
  let inicioMenu = document.createElement("div");
  let jardimMenu = document.createElement("div");

  //Adicionando atributos nas divs

  baseMenu.setAttribute("class","base")
  agricolasMenu.setAttribute("onclick","exibirAgricolas()")
  agricolasMenu.setAttribute("id","ball-1")
  agricolasMenu.setAttribute("class","ball")
  inicioMenu.setAttribute("onclick","paginaInicial()")
  inicioMenu.setAttribute("id","ball-2")
  inicioMenu.setAttribute("class","ball")
  jardimMenu.setAttribute("onclick","exibirJardim()")
  jardimMenu.setAttribute("id","ball-3")
  jardimMenu.setAttribute("class","ball")

  //filhos das divs
  
  let imgAgricola= document.createElement("img");
  let spanAgricola = document.createElement("span")
  imgAgricola.src="./images/AGRICOLA.svg"
  spanAgricola.setAttribute("id","span-menu-0")
  spanAgricola.innerText="Agricolas"

  let imginicio= document.createElement("img");
  let spanInicio = document.createElement("span")
  imginicio.src="./images/CASA.svg"
  spanInicio.setAttribute("id","span-menu-1")
  spanInicio.innerText="Inicio"

  let imgJardim= document.createElement("img");
  let spanJardim = document.createElement("span")
  imgJardim.src="./images/JARDIM.svg"
  spanJardim.setAttribute("id","span-menu-2")
  spanJardim.innerText="Jardim"

  agricolasMenu.appendChild(imgAgricola)
  agricolasMenu.appendChild(spanAgricola)
  inicioMenu.appendChild(imginicio)
  inicioMenu.appendChild(spanInicio)
  jardimMenu.appendChild(imgJardim)
  jardimMenu.appendChild(spanJardim)

  baseMenu.appendChild(agricolasMenu)
  baseMenu.appendChild(inicioMenu)
  baseMenu.appendChild(jardimMenu)

  footer.appendChild(baseMenu)
}
//Filtro de jardim
function exibirJardim() {
  let section = document.getElementById("section-cards");
  section.innerHTML = "";
  criarCardsJardim();
}
//Filtro de agricolas
function exibirAgricolas() {
  let section = document.getElementById("section-cards");
  section.innerHTML = "";
  criarCardsAgricolas();
}
//Filtro de inicio
function paginaInicial() {
  let section = document.getElementById("section-cards");
  document.location.reload(true)
}
