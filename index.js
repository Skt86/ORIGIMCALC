/* //Registro de viaje y calculadora de peso de carga

//datos generales

let intento = 1;

while(usuario != 'Guido'){
    alert('Usuario invalido')
    
    if(intento === 10){
        break;
    }else(alert(`Intentaste ${intento} veces `));
    intento++;
    
    usuario = prompt('ingrese el usuario correcto');
};
//repite en la consola tantas veces como intentos fallidos
for(let i = 1; i<= intento; i++) {
    console.log(`${i} - ${usuario}`);
};


let origenViaje = prompt('Ingrese provincia de origen');
let destinoViaje = prompt('Ingrese provincia destino'); */

/* 
calculadora de peso

si movil master o camion = limitePeso A o B

pesoCarga = (pesoFisiologica or pesoDextrosa) * unidadesCarga = resultado<=limitePeso */

let usuario = prompt('Ingrese su usuario');

alert(`Hola ${usuario}, bienvenido a la calculadora de peso`)

let pesoFisiologica = 8;
let pesoDextrosa= 11;


let fechaViaje = prompt('Ingrese fecha de viaje');
while(!fechaViaje){
    alert('No ha ingresado fecha de viaje, vuelva a intentarlo');
    fechaViaje = prompt('Ingrese fecha de viaje');
};
    
let movilAfectado = prompt('Ingrese movil Master o Iveco').toLowerCase;

    if (movilAfectado == "master") {
        cargaMaxima = 1700;
    }else (cargaMaxima = 4000);


/*
tipoCarga * unidadesCarga = cargaParcial++ => pesoCarga. Deberia al final solicitar una condicion para volver a iniciar y sumar los resultados.
*/
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
};



/* funcion cargatotal{
    function cargaparcial{
        switch(tipoCarga)
    }

    let agregaitems? = prompt
    if(agregaitems = si){
        cargaparcial
    }else( break;)
} */