const main = document.querySelector("#main")
const aboutUs = document.querySelector("#about__us")
const shop = document.querySelector("#shop")
const contact = document.querySelector("#contact")
const filtro = document.createElement("div")
const categoriesContainer = document.querySelector("#categoriesContainer")
const filterList = document.querySelectorAll("#category")
const btn = document.getElementsByClassName("btn-carrito")
const nav = document.querySelector("#navbar")
const openMenu = document.querySelector("#open-menu")
const closeMenu = document.querySelector("#close-menu")

//seteo carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || []


//funcion para activar el boton al filtrar los botines
const applyFilter=(category)=>{
    const categorias = [...category]
    categorias.forEach((categoryBtn)=>{
        if(categoryBtn.dataset.category !== category){
            categoryBtn.classList.remove("category")
            return;
        }
        categoryBtn.classList.add("category-selected")
    })
}

//agregar producto al carrito
const addToCart = (e)=>{
    e.preventDefault()
    btn.forEach((button)=>{
        console.log('anda');
    })
}

const openingMenu = () =>{
    nav.classList.add("visible")
}

const closingMenu = () =>{
    nav.classList.remove("visible")
}

const init = () => {
    //categoriesContainer.addEventListener('click', applyFilter)
    //btn.addEventListener('submit', addToCart);
    openMenu.addEventListener("click", openingMenu)
    closeMenu.addEventListener("click", closingMenu)
}

init()