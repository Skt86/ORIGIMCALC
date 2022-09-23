//Registro de viaje y calculadora de peso de carga

//Constructores

class Nuevoviaje {
    constructor(fechaViaje, origenViaje, destinoViaje, distanciaRecorrida) {
        this.fechaViaje = fechaViaje;
        this.origenViaje = origenViaje.toUpperCase();
        this.destinoViaje = destinoViaje.toUpperCase();
        this.distanciaRecorrida = distanciaRecorrida;
    }
};

class Producto {
    constructor(id, nombre, presentacion, peso, foto){
        this.id = id;
        this.nombre = nombre;
        this.presentacion = presentacion;
        this.peso = peso;
        this.foto = foto;
    }
};

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
};

// Arreglo de productos

function cargarProductos() { 
    productos.push(new Producto(1, "FISIOLOGICA 500ML", 15, 8, '../images/cards/solucionFisiologica500ml.jpg'));
    productos.push(new Producto(2, "FISIOLOGICA 1000ML", 8, 10, '../images/cards/solucionFisiologica1000ml.jpg'));
    productos.push(new Producto(3, "DEXTROSA 500ML", 15, 9, '../images/cards/solucionDextrosa500ml.jpg'));
    productos.push(new Producto(4, "FISIOLOGICA 2000ML", 4, 11, '../images/cards/solucionFisiologica2000ml.jpg'));
};

const productos = [];
const elementosCarrito = [];

const contenedorProductos = document.getElementById('contenedor-productos');

const contenedorCarritoCompras = document.querySelector("#items")

const contenedorFooterCarrito = document.querySelector("#footer");

//DEFINICION DE FUNCIONES

//Registro Formulario

function registrarViaje() {
    let datosViaje = [];
        let fechaViaje = document.getElementById("inputDate").value;

        let origenViaje = document.getElementById("ciudadOrigen").value;
        
        let destinoViaje = document.getElementById("ciudadDestino").value;

        let distanciaRecorrida = document.getElementById("inputDistancia").value;

        let Viaje = new Nuevoviaje(fechaViaje, origenViaje, destinoViaje, distanciaRecorrida);

        datosViaje.push(Viaje);
};

//CHECKBOX

let checkbox = document.getElementById('gridCheck');
checkbox.addEventListener("change", validaCheckbox, false);

function validaCheckbox(){
    var checked = checkbox.checked;
    if(!checked){
    alert('checkbox debe estar seleccionado');
    }
};
function registroViaje(datosViaje) {
    for (const Viaje of datosViaje) {
        console.log();(`FECHA: ${Viaje.fechaViaje}\n ORIGEN: ${Viaje.origenViaje}\n DESTINO: ${Viaje.destinoViaje}\n KM: ${Viaje.distanciaRecorrida}`);
    }
};

function main() {
    let datosViaje = registrarViaje();
    registroViaje(datosViaje);
};

// Registro de carga

function dibujarCarrito() {
    contenedorCarritoCompras.innerHTML = "";

    elementosCarrito.forEach(
        (elemento) => {
            let renglonesCarrito= document.createElement("tr");
            
            renglonesCarrito.innerHTML = `
                <td>${elemento.producto.id}</td>
                <td>${elemento.producto.nombre}</td>
                <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="100000" step="1" style="width: 50px;"/></td>
                <td>${elemento.producto.presentacion}</td>
                <td>${(elemento.cantidad/elemento.producto.presentacion)}</td>
                <td><button id="eliminar-producto-${elemento.producto.id}" type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
                
            `;

            contenedorCarritoCompras.append(renglonesCarrito);

            //Agregar evento a input de renglón en carrito
            let inputCantidadProducto = document.getElementById(`cantidad-producto-${elemento.producto.id}`);
            inputCantidadProducto.addEventListener('change', (ev) => {
                let nuevaCantidad = ev.target.value;
                elemento.cantidad = nuevaCantidad;

                dibujarCarrito();
            });


            //Agregar evento a eliminar producto
            let botonEliminarProducto = document.getElementById(`eliminar-producto-${elemento.producto.id}`);
            botonEliminarProducto.addEventListener('click', () => {

                let indiceEliminar =  elementosCarrito.indexOf(elemento);
                elementosCarrito.splice(indiceEliminar,1);
                
                dibujarCarrito();
            });
        }
    );

    const valorInicial = 0;
    const totalCarga = elementosCarrito.reduce(
        (previousValue, currentValue) => previousValue + currentValue.producto.peso*currentValue.cantidad,
        valorInicial
    );

    if(elementosCarrito.length == 0) {
        contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="6">NO SE HA REGISTRADO UNA CARGA</th>`;
    } else {
        contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="6">Peso estimado de la carga: ${totalCarga}</th>`;
    }

}

function removerProductoCarrito(elementoAEliminar) {
    const elementosAMantener = elementosCarrito.filter((elemento) => elementoAEliminar.producto.id != elemento.producto.id);
    elementosCarrito.length = 0;

    elementosAMantener.forEach((elemento) => elementosCarrito.push(elemento));
}

function crearCard(producto) {
    //Botón
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-success";
    botonAgregar.innerText = "Agregar";

    //Card body
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>${producto.presentacion} Unidades x caja</p>
    `;
    cuerpoCarta.append(botonAgregar);

    //Imagen
    let imagen = document.createElement("img");
    imagen.src = producto.foto;
    imagen.className = "card-img-top";
    imagen.alt = producto.nombre;

    //Card
    let carta = document.createElement("div");
    carta.className = "card m-2 p-2";
    carta.style = "width: 18rem";
    carta.append(imagen);
    carta.append(cuerpoCarta);

    //Contenedor Card
    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = "col-xs-6 col-sm-3 col-md-2";
    contenedorCarta.append(carta);

    //Agregar algunos eventos
    botonAgregar.onclick = () => {
        let elementoExistente = elementosCarrito.find((elem) => elem.producto.id == producto.id);
        
        if(elementoExistente) {
            elementoExistente.cantidad+=1;
        } else {
            let elementoCarrito = new ElementoCarrito(producto, 1);
            elementosCarrito.push(elementoCarrito);
        }

        dibujarCarrito();

        swal({
            title: '¡Producto agregado!',
            text: `${producto.nombre}`,
            icon: 'success',
            buttons: {
                cerrar: {
                    text: "cerrar",
                    value: false
                },
                carrito: {
                    text: "ir a carrito",
                    value: true
                }
            }
        }).then((decision) => {
            if(decision) {
                const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {keyboard: true});
                const modalToggle = document.getElementById('toggleMyModal'); 
                myModal.show(modalToggle);
            } else {
                swal("No quieres ir al carrito");
            }
        });
    }
    return carta;
};

function dibujarCatalogoProductos() {
    contenedorProductos.innerHTML = "";

    productos.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto);
            contenedorProductos.append(contenedorCarta);
        }
    );

};


//EJECUCION DE FUNCIONES

// main()
cargarProductos();

if(localStorage.getItem('carrito')){
    carrito = JSON.parse(localstorage.getItem('carrito'));
    for(i=0; i<carrito.length; i++){
        elementosCarrito.push(new elementosCarrito(carrito[i].cantidad))
    }
};

dibujarCarrito();
dibujarCatalogoProductos();

