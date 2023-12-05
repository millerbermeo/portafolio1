
let inputBusqueda = document.getElementById("inputBusqueda");
class Automovil {
    constructor(marca, modelo, precio, anyo, kilometros, ciudad, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.kilometros = kilometros;
        this.ciudad = ciudad;
        this.imagen = imagen;
    }
}

let auto1 = new Automovil("mt09", "yamaha", 60000000, 2023, 2390, "Bogota", "../images/mt09.webp");
let auto2 = new Automovil("bmw", "s1000", 120000000, 2022, 1400, "Huila", "../images/bmw.jpg");
let auto3 = new Automovil("zx10", "kawasaki", 110000000, 2021, 3200, "Medellin", "../images/zx10.jpeg");
let auto4 = new Automovil("super", "duke", 135000000, 2024, 100, "Cali", "../images/duke.jpg");
let auto5 = new Automovil("ducati", "v4s", 140000000, 2022, 38999, "Cundinamarca", "../images/ducati.jpg");

cargarVehiculo(auto1);
cargarVehiculo(auto2);
cargarVehiculo(auto3);
cargarVehiculo(auto4);
cargarVehiculo(auto5);

window.addEventListener("keydown", function (event) {
    let busqueda = document.getElementById("inputBusqueda").value;
    if (event.key == "Enter") {
        boxProductos.innerHTML = "";
        let inputUser = busqueda.toLowerCase();
        if (inputUser == "mt09") {
            cargarVehiculo(auto1);
        }
        else if (inputUser == "bmw") {
            cargarVehiculo(auto2);

        } else if (inputUser == "zx10") {
            cargarVehiculo(auto3);

        } else if (inputUser == "super") {
            cargarVehiculo(auto4);

        } else if (inputUser == "ducati") {
            cargarVehiculo(auto5);

        } else if (inputUser == "") {
            cargarVehiculo(auto1);
            cargarVehiculo(auto2);
            cargarVehiculo(auto3);
            cargarVehiculo(auto4);
            cargarVehiculo(auto5);

        }
    }
});

function cargarVehiculo(auto) {
    let boxProductos = document.getElementById("boxProductos");

  
    let boxProducto = document.createElement("div");
    boxProductos.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-producto");


    let boxImg = document.createElement("div");
    boxProducto.appendChild(boxImg);
    boxImg.setAttribute("class", "box-img");
    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "img-auto");

    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");
    let marca = document.createElement("label");
    boxInfo.appendChild(marca);
    let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
    marca.appendChild(txtNodeMarca);
    marca.setAttribute("class", "marca");

    let precio = document.createElement("label");
    boxInfo.appendChild(precio);
    let txtNodePrecio = document.createTextNode("$" + Intl.NumberFormat("de-DE").format(auto.precio));
    precio.appendChild(txtNodePrecio);
    precio.setAttribute("class", "precio");
 
    let anyo = document.createElement("label");
    boxInfo.appendChild(anyo);
    let txtNodeAnyo = document.createTextNode(auto.anyo + " · ");
    anyo.appendChild(txtNodeAnyo);
    anyo.setAttribute("class", "info-anyo");

    let kilometros = document.createElement("label");
    boxInfo.appendChild(kilometros);
    let kilometrosStr = Intl.NumberFormat("de-DE").format(auto.kilometros);
    let txtNodeKilometros = document.createTextNode(kilometrosStr + " km" + " · ");

    kilometros.appendChild(txtNodeKilometros);
    kilometros.setAttribute("class", "info-kilometros");
 
    let ciudad = document.createElement("label");
    boxInfo.appendChild(ciudad);
    let txtNodeCiudad = document.createTextNode(auto.ciudad);
    ciudad.appendChild(txtNodeCiudad);
    ciudad.setAttribute("class", "info-ciudad");

 
    let boxCorazon = document.createElement("div");
    boxImg.appendChild(boxCorazon);
    let iconoCorazon = document.createElement("i");
    boxCorazon.appendChild(iconoCorazon);
    boxCorazon.setAttribute("class", "box-corazon");
    iconoCorazon.setAttribute("class", "icon-corazon fa-regular fa-heart");

   
    let lineaDiv = document.createElement("div");
    boxProducto.appendChild(lineaDiv);
    lineaDiv.setAttribute("class", "linea-div");

    let estrellasContenedor = document.createElement("div");
    boxInfo.appendChild(estrellasContenedor);
    estrellasContenedor.setAttribute("class", "info-estrellas");
    
    let estrellas = [];
    
    for (let i = 0; i < 5; i++) {
        let estrella = document.createElement("i");
        estrella.classList.add("far", "fa-star");
        estrella.addEventListener("click", () => toggleEstrellas(i));
        estrellasContenedor.appendChild(estrella);
        estrellas.push(estrella);
    }
    
    function toggleEstrellas(index) {
        for (let i = 0; i < estrellas.length; i++) {
            if (i <= index) {
                estrellas[i].classList.add("fas"); // Agrega la clase 'fas' para cambiar el ícono a una estrella llena
            } else {
                estrellas[i].classList.remove("fas"); // Quita la clase 'fas' para cambiar el ícono a una estrella vacía
            }
        }
    }
    
    


}

function toggleEstrella(estrella) {
    estrella.classList.toggle("fas"); 
}





cargarFiltro();

function cargarFiltro() {

    mainContent.appendChild(boxFiltro);
    boxFiltro.setAttribute("class", "box-filtro");
}


let boxToggle = document.getElementById("boxToggle");
let filtros = document.querySelector(".filtros");

boxToggle.addEventListener("click", () => {
    if (boxToggle.classList.contains("box-toggle-off")) {
        boxToggle.classList.add("box-toggle-on");
        boxToggle.classList.remove("box-toggle-off");
        buttonToggle.classList.add("button-toggle-on");
        buttonToggle.classList.remove("button-toggle-off");

        filtros.classList.remove("filtros-hidden");
    } else {
        boxToggle.classList.remove("box-toggle-on");
        boxToggle.classList.add("box-toggle-off");
        buttonToggle.classList.remove("button-toggle-on");
        buttonToggle.classList.add("button-toggle-off");
  
        filtros.classList.add("filtros-hidden");
    }
});
