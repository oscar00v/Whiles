/*let index = 11;

while (index <11){
    console.log(index)
    index++;
}


console.log("--------------------");
////////////////////////////////////////////////////////
let contador = 11;

do{
    contador++;
    console.log(contador)
}while (contador< 10)

*/ 


let numero = prompt("dame un numero");
let i = 0;

while(i <= numero){
    console.log(5*i);
    i++;
}



////////////////////////////////


let numero1 = prompt("Dame el primer numero del 1 al 50:");
let numero2 = prompt("Dame el segundo numero del 1 al 50:");
let x= 0;

while(x<=50){
    if(x == numero1 || x== numero2){
        console.log("Loteria");
        x++;
    }else{
    console.log(x); 
    x++;
    }
}


//////////////////////////////////////////////////////////////////

let numArrey = [];
let num;

do{
    num = prompt("Introduce un número: si desea terminar introdusca un 0");

    if(num !== 0 ){
        numArrey.push(num);
    }
}while(num !== '0');

console.log("Números capturados:", numArrey);



/////////////////////////////////////////////////////////////////////


let palabras = [];
let entrada;

do {
    // Solicita al usuario que ingrese una letra o palabra
    entrada = prompt("Introduce una letra o palabra (deja vacío y presiona Enter para terminar):");

    // Si la entrada no está vacía, la guarda en el arreglo
    if (entrada !== "") {
        palabras.push(entrada);
    }
} while (entrada !== ""); // El bucle se detiene cuando la entrada está vacía

// Concatenar todas las palabras capturadas en una sola cadena
let resultado = palabras.join(' ');

// Mostrar el resultado en la consola
console.log("Palabras capturadas:", resultado);





////////////////////////////////////////////////////////////////////////////

let dia 


function mostrarMensaje(dia) {
    var mensaje = "";
     
    // Validar el día ingresado usando if y else if
    if (dia === 'lunes') {
        mensaje = "¡Ánimo con el inicio de semana!";
    } else if (dia === 'martes') {
        mensaje = "¡Bienvenido al martes!";
    } else if (dia === 'miércoles') {
        mensaje = "¡Mitad de semana, ya casi llegamos!";
    } else if (dia === 'jueves') {
        mensaje = "¡Ya casi es viernes!";
    } else if (dia === 'viernes') {
        mensaje = "¡Viernes al fin, disfruta tu día!";
    } else if (dia === 'sábado') {
        mensaje = "¡Disfruta tu sábado!";
    } else if (dia === 'domingo') {
        mensaje = "Ve a descansar";

        return true;    // Devolver true si es domingo para terminar la ejecución del programa

    } else {
        alert("No reconocí ese día, intenta de nuevo.");
        return false; // Devolver falso para indicar que no es domingo
    }
    
    // Mostrar el mensaje al usuario
    alert(mensaje);
    
    
}


do{
    dia = prompt ("Ingresa un día de la semana (lunes, martes, ...)");
} while (!mostrarMensaje(dia));