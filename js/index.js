const main = document.querySelector("#main");
const aboutUs = document.querySelector("#about__us");
const shop = document.querySelector("#shop");
const contact = document.querySelector("#contact");
const filtro = document.createElement("div");
const categoriesContainer = document.querySelector("#categoriesContainer");
const filterList = document.querySelectorAll(".category");
const btnAgregar = document.querySelectorAll(".btn-carrito");
const nav = document.querySelector("#navbar");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const cartMenu = document.querySelector("#cart__buy");

//seteo carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//funcion para activar el boton al filtrar los botines
filterList.forEach((button) => {
  button.addEventListener("click", (e) => {
    filterList.forEach((btn) => btn.classList.remove("selected"));
    e.currentTarget.classList.add("selected");

    const botinElegido = e.currentTarget.id;

    if (botinElegido !== "allBotines") {
      const botinesFiltrados = botines.filter(
        (botin) => botin.marca === botinElegido
      );
      botinesTemplates(botinesFiltrados);
    } else {
      botinesTemplates(botines);
    }
  });
});

const openingMenu = () => {
  nav.classList.add("visible");
};

const closingMenu = () => {
  nav.classList.remove("visible");
};

const addBotinToCart = (e) => {
  const botinId = e.currentTarget.id;
  const botinAgregado = botines.find((botin) => botin.id === botinId);
  console.log(botinAgregado);
  carrito.push(botinAgregado);
  console.log(carrito);
};

const showCart = () => {
  nav.classList.toggle("visible");
  if (cartMenu.classList.contains("visible")) {
    cartMenu.classList.remove("visible");
    return;
  }
};

const init = () => {
  botinesTemplates(botines);
  openMenu.addEventListener("click", openingMenu);
  closeMenu.addEventListener("click", closingMenu);
};

init();
