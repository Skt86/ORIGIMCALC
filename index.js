//Registro de viaje y calculadora de peso de carga

//datos generales


let pesoFisiologica = 8;
let pesoDextrosa= 11;

usuario = prompt('ingrese el usuario correcto');

alert(`Hola ${usuario}, bienvenido a la calculadora de peso`);

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