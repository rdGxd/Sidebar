const aside = document.querySelector("aside");
const h1 = document.querySelector("h1");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");
const grid = document.querySelector(".grid");
const buscar = document.querySelector(".buscar");
const texto = document.querySelectorAll("span");
const saiu = document.querySelector(".saiu");
const doctor = document.querySelector("#doctor");
const saindo = document.querySelector(".saindo");
const ativo = document.querySelector("div");

aside.addEventListener("mouseover", sideBarOpen);
aside.addEventListener("mouseout", sideBarClose);

function sideBarOpen() {
  aside.style.width = "15.625rem";
  h1.style.marginLeft = "10.625rem";
  menu.style.marginLeft = "13rem";
  logo.style.display = "flex";
  buscar.style.display = "flex";
  for (let i = 0; i < texto.length; ++i) {
    texto[i].style.display = "block";
  }
  saiu.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
  saiu.style.marginLeft = "2.9rem";
  doctor.style.display = "flex";
  saindo.style.width = "15.6rem";
  ativo.setAttribute("class", "ativo");
}

function sideBarClose() {
  aside.style = "";
  h1.style = "";
  menu.style = "";
  logo.style = "";
  buscar.style = "";
  for (let i = 0; i < texto.length; ++i) {
    texto[i].style.display = "";
  }
  saiu.style.transform = "";
  saiu.style.marginLeft = "";
  doctor.style.display = "";
  saindo.style.width = "";
  ativo.removeAttribute("class", "ativo");
}
