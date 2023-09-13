const botines = [
  {
    precio: 40000,
    id: 1,
    marca: "Adidas",
    modelo: "Predator",
    img: "img/AdidasPredator.jpg",
  },
  {
    precio: 42000,
    id: 2,
    marca: "Nike",
    modelo: "Mercurial",
    img: "img/NikeMercurial.jpg",
  },
  {
    precio: 30000,
    id: 3,
    marca: "Puma",
    modelo: "Future",
    img: "img/PumaFuture.jpg",
  },
  {
    precio: 22000,
    id: 4,
    marca: "New Balance",
    modelo: "Tekela",
    img: "img/NewBalanceTekela.jpg",
  },
  {
    precio: 38000,
    id: 5,
    marca: "Adidas",
    modelo: "X",
    img: "img/AdidasX.jpg",
  },
  {
    precio: 33000,
    id: 6,
    marca: "Adidas",
    modelo: "Copa",
    img: "img/AdidasCopa.jpg",
  },
  {
    precio: 30000,
    id: 7,
    marca: "Nike",
    modelo: "Tiempo",
    img: "img/NikeTiempo.jpg",
  },
  {
    precio: 35000,
    id: 8,
    marca: "Nike",
    modelo: "Phantom",
    img: "img/NikePhantom.jpg",
  },
  {
    precio: 32000,
    id: 9,
    marca: "Puma",
    modelo: "Ultra",
    img: "img/PumaUltra.jpg",
  },
  {
    precio: 25000,
    id: 10,
    marca: "New Balance",
    modelo: "Furon",
    img: "img/NewBalanceFuron.jpg",
  },
  {
    precio: 20000,
    id: 11,
    marca: "Puma",
    modelo: "King",
    img: "img/PumaKing.jpg",
  },
];

//creo el template de los productos
const botinesTemplates = botines.map((botin)=>{
  const {marca, precio, modelo, img, id} = botin
  shop.innerHTML+= `
  <div class="card_product">
  <div class="img_container">
      <img src="${img}" alt="botin ${marca} ${modelo}">
  </div>
    <h3 class="infoBotin">${marca} ${modelo}</h3>
    <p class="precioBotin">$${precio}</p>
  <div id="btn-container">
    <button type="submit" class="btn-carrito"
    botin-id= ${id}
    botin-marca${marca}
    botin-modelo= ${modelo}
    botin-precio=${precio}
    botin.img=${img}
    >Agregar al Carrito</button>
  </div>
</div>`
})