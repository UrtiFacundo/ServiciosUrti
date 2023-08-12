const servicios =[
  {
    id: "branding",
    titulo: "Branding",
    imagen: "./img/servicios/Branding.jpg",
    precio: 6000
  },
  {
    id: "publicidad",
    titulo: "Publicidad",
    imagen: "../img/servicios/Publicidad.jpg",
    precio: 8000
  },
  {
    id: "Social-Media",
    titulo: "Social Media",
    imagen: "./img/servicios/Social Media.jpg",
    precio: 4500
  },
  {
    id: "web-development",
    titulo: "Web Development",
    imagen: "../img/servicios/Web Development.jpg",
    precio: 5000
  },
];

const contenedorServicios = document.querySelector("#contenedor-servicios");
let botonContratar = document.querySelectorAll(".btn-secondary");
const indicador = document.querySelector("#indicador");


function cargarServicios() {
servicios.forEach(servicio => {

  const div = document.createElement("div");
  div.classList.add("contenedor-servicio");
  div.innerHTML = `
  <ul> <div class="contendedor-servicio">
  <div class="row">
  <img  class="card-img-top" src="${servicio.imagen}" alt="${servicio.titulo}">
    <h2 class="card-title">${servicio.titulo}</h2>
    <p class="card-text">Trabajaremos sobre la marca de tu negocio (re)construyéndola desde el principio.
      Investigaremos el
      segmento del mercado en el que te posicionas e identificaremos tu target de forma detallada.
      </p>
    <main class="text-end">
      <a id= class="btn btn-secondary" >$${servicio.precio}</a>
     </main>
     <main class="text-end">
       <button class="btn-secondary" id="${servicio.id}" >Contratar</button>
   </main>
  </div>
  </ul>
  `;
  contenedorServicios.append(div);
  actualizarBotonContratar();
})

}

cargarServicios();

function actualizarBotonContratar() {
  botonContratar = document.querySelectorAll(".btn-secondary");
  botonContratar.forEach(boton => {
  boton.addEventListener("click", agregarAlCarrito);
  });
} 

const serviciosEnCarrito = [];
function agregarAlCarrito(e) {
const idBoton = e.currentTarget.id;
const servicioAgregado = servicios.find(servicio => servicio.id === idBoton);

;
if(serviciosEnCarrito.some(servicio => servicio.id === idBoton)){
  const index = serviciosEnCarrito.findIndex(servicio => servicio.id === idBoton);
  serviciosEnCarrito[index].cantidad++;
} else{
  servicioAgregado.cantidad = 1;
  serviciosEnCarrito.push(servicioAgregado);
}
actualizarIndicador();

localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));
}
function actualizarIndicador () {
  let nuevoIndicador = serviciosEnCarrito.reduce((acc, servicio) => acc + servicio.cantidad, 0);
  indicaro 
}
