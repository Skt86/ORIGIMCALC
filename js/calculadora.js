//Registro de viaje y calculadora de peso de carga

//Funciones y parametros generales

class nuevoViaje {
    constructor(fechaViaje, origenViaje, destinoViaje, distanciaRecorrida) {
        this.fechaViaje = fechaViaje;
        this.origenViaje = origenViaje.toUpperCase();
        this.destinoViaje = destinoViaje.toUpperCase();
        this.distanciaRecorrida = distanciaRecorrida;
    }
}

function registrarViaje() {
    let tramosViaje = parseInt(prompt('Cuantos tramos desea registrar?'));
    let datosViaje = [];

    for (let i = 0; i < tramosViaje; i++) {

        let fechaViaje = prompt('Ingrese fecha de viaje');
        while(!fechaViaje){
            alert('No ha ingresado fecha de viaje, vuelva a intentarlo');
                fechaViaje = prompt('Ingrese fecha de viaje');
        };

        let origenViaje = prompt('Ingrese provincia de origen');
        
        let destinoViaje = prompt('provincia de destino');

        let distanciaRecorrida = parseInt(prompt('Ingrese los kilometros recorridos'));

        let Viaje = new nuevoViaje(fechaViaje, origenViaje, destinoViaje, distanciaRecorrida);
        datosViaje.push(Viaje);
    }
    return datosViaje;
};

function registroViaje(datosViaje) {
    for (const Viaje of datosViaje) {
        alert(`FECHA: ${Viaje.fechaViaje}\n ORIGEN: ${Viaje.origenViaje}\n DESTINO: ${Viaje.destinoViaje}\n KM: ${Viaje.distanciaRecorrida}`);
    }
};

function main() {
    let datosViaje = registrarViaje();
    registroViaje(datosViaje);
};

let pesoFisiologica = 8;
let pesoDextrosa= 11;

//Validacion de usuario

usuario = prompt('ingrese el usuario correcto');
while(!usuario){
    alert("Por favor ingrese un usuario");
    usuario = prompt('ingrese el usuario correcto');
}

alert(`Hola ${usuario}, bienvenido a la calculadora de peso`);


//Calculadora de peso
let movilAfectado = prompt('Ingrese movil Master o Iveco').toLowerCase;

    if (movilAfectado == "master") {
        cargaMaxima = 1700;
    }else (cargaMaxima = 4000);


let tipoCarga = prompt("Ingrese 1 para fisiologica o 2 para dextrosa");   
let unidadesCarga = parseInt(prompt("Ingrese la cantidad de unidades"));

function pesoCarga(tipoCarga,unidadesCarga) {
    switch(tipoCarga) {
            case "1":
                return pesoFisiologica * unidadesCarga;
                break;
            case "2":
                return pesoDextrosa * unidadesCarga;
                break;
            default:
                return 0;
        };
    };

alert(`El peso estimado es ${pesoCarga(tipoCarga, unidadesCarga)} kg`);

if (pesoCarga(tipoCarga, unidadesCarga) > cargaMaxima) {
    alert(`El vehiculo esta exedido de peso`);
} else (alert("Buen viaje!"));