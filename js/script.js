//Creo la clase de objeto producto como base para cargar los productos: 
class Producto {
    constructor(nombre, id, precio, color, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }
}

//Inicializo arrays para las categorias de los productos:
const remeras = [];
const buzos = [];
const pantalones = [];

//Cargo el stock de productos segun su categoria:

//REMERAS:
remeras.push(new Producto("Remera Algodón", 1, 2000, "Negro", 30));
remeras.push(new Producto("Musculosa Unisex", 2, 1400, "Gris", 10));
remeras.push(new Producto("Remera Batik", 3, 1400, "Negro", 20));
remeras.push(new Producto("Remera Unisex", 4, 1400, "Blanco", 15));

//BUZOS:
buzos.push(new Producto("Buzo Oversize", 5, 4000, "Negro", 20));
buzos.push(new Producto("Buzo Oversized Dama", 6, 3800, "Rosa", 40));
buzos.push(new Producto("Buzo Batik", 7, 3800, "Negro", 40));

//PANTALONES:
pantalones.push(new Producto("Jogging Adidas", 8, 2900, "Negro", 10));
pantalones.push(new Producto("Short Jean", 9, 1000, "Azul", 10));


//Recorro los arrays para mostrarle los productos al usuario:
for (const remera of remeras) {
    alert("ID (" + remera.id + ") - " + remera.nombre);
}
for (const buzo of buzos) {
    alert("ID (" + buzo.id + ") - " + buzo.nombre);
}
for (const pantalon of pantalones) {
    alert("ID (" + pantalon.id + ") - " + pantalon.nombre);
}

//Solicito al usuario el ID de la prenda:
let prendaSeleccionada = parseInt(prompt("Ingrese el ID de la prenda que desea comprar:"));
const remeraBuscada = remeras.find(remera => remera.id === prendaSeleccionada);
const buzoBuscado = buzos.find(buzo => buzo.id == prendaSeleccionada);
const pantalonBuscado = pantalones.find(pantalon => pantalon.id == prendaSeleccionada);

if (prendaSeleccionada <= 0) {
    alert("Ingresa un ID valido");
} else if (prendaSeleccionada <=4) {
    alert("Seleccionaste " +  remeraBuscada.nombre + "\nToca aceptar para agregarlo a tu carrito"); 
} else if (prendaSeleccionada <=7) {
    alert("Seleccionaste " + buzoBuscado.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else if (prendaSeleccionada <= 9) {
    alert("Seleccionaste " + pantalonBuscado.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else {
    alert("Ingresa un ID valido");
}