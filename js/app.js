/* let nombre = prompt('ingresa tu nombre');
alert(`hola ${nombre} como estas`);

let edad= parseInt( prompt('ingresa tu edad'));

let resultado = 2022 - edad;
alert(`${nombre} has nacido en el ${resultado}`);

let dia = parseInt(prompt('ingresa el dia que naciste'));
let mes = prompt('ahora ingresa el mes');

if (mes = "enero") {
    if (dia >=1 && dia < 21) {
     alert(`tu signo es capricornio`)
    }
    else 
    alert('tu signo es acuario')
}

if (mes ="febrero"){
    if (dia<19){
        alert('tu signo es acuario')
    }   
}


si dia >= 21 y mes marzo  or  dia < 20 y mes abril  Aries

si dia >21 y el mes abril or dia <21 y mes mayo tauro 





Aries (21 de marzo / 20 de abril)
Tauro (21 de abril / 21 de mayo)
Géminis (22 de mayo / 21 de junio)
Cáncer (22 de junio / 22 de julio)
Leo (23 de julio / 23 de agosto)
Virgo (24 de agosto / 23 de septiembre)
Libra (24 de septiembre / 23 de octubre)
Escorpión (24 de octubre / 22 de noviembre)
Sagitario (23 de noviembre / 21 de diciembre)
Capricornio (22 de diciembre / 20 de enero)
Acuario (21 de enero / 18 de febrero)
Piscis (19 de febrero / 20 de marzo) */







/* let numero =parseInt( prompt('ingrese numero')); */

/* if ( numero <=1000 ){
    alert('tu presupuesto es bajo')
}
if (numero <=3000 && numero >1000){
    alert('tu presupuesto es medio')
}

if (numero > 3000){
    alert('tu presupuesto es alto')
} */


/* if (numero <=1000){
    alert('tu presupuesto es bajo')
}else if (numero <=3000 && numero >1000){
    alert('tu presupuesto es medio')
}else {
    alert('tu presupuesto es alto')
} */


/* let numero = parseInt(prompt('elija el monto a pagar si paga con efectivo tiene un 20% de descuento si paga con nuestra tarjeta un 30%'));

let resultado20 = numero *0.80 ;
let resultado30 = numero * 0.70;
alert(`si pagas en efectivo te queda ${resultado20} y si pagas en tarjeta te quedaria ${resultado30}`) */


/* let precio = parseFloat(prompt('INGRESAR PRECIO'));
let descuento20 = precio - (precio  * 0.2);
let descuento30 = precio - (precio  * 0.3);
console.log(descuento20);
console.log(descuento30); */


/* actividad 1  */

/* let nombre2="angel";
let nombre = prompt('ingrese un nombre');
if (nombre == nombre2){
    alert('fui yo ')
}else{
    alert('yo no fui')
} */

/* actividad 1 presionar y  */

/* let letra =( prompt('ingrese una letra'));
if (letra =="y" || letra =="Y"){
    alert('correcto!')
}
else {
    alert('error')
} */


/* actividad 3  escojer personaje  */
/* Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4
 */


/* let numero = parseInt(prompt('Elegi un numero del 1 al 4 '));

switch (numero) {
    case 1:
alert('Elegiste a Homero');
break;
    case 2:
        alert('Elegiste a Marge');
        break;
    
    case 3:
        alert('Elegiste a Bart');
        break;
    case 4:
        alert('Elegiste a Lisa');
        break;

    default:
        alert('no es ninguna de las opciones')
        break;
} */

/* let producto1 = prompt('INGRESAR 1er PRODUCTO');
let producto2 = prompt('INGRESAR 2do PRODUCTO');
let producto3 = prompt('INGRESAR 3er PRODUCTO');
let producto4 = prompt('INGRESAR 4to PRODUCTO');

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
    let heladera = "1) " + producto1 + " " +
        "2) " + producto2 + " " +
        "3) " + producto3 + " " +
        "4) " + producto4;
    console.log(heladera);
} else {
    console.log("ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS");
}

 */
/* let producto1 = prompt('INGRESAR 1er PRODUCTO');
let producto2 = prompt('INGRESAR 2do PRODUCTO');
let producto3 = prompt('INGRESAR 3er PRODUCTO');
let producto4 = prompt('INGRESAR 4to PRODUCTO');
if (producto1 !="" && producto2 !="" && producto3 !="" && producto4 !=""){


alert(`1)${producto1} 2)${producto2} 3)${producto3} 4)${producto4}`)
}
else {
    alert('debe ingresar todos los campos')
} */

/* 
let numero = prompt ('ingrese un numero');
let texto = prompt ('ingrese un texto');

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
 */
/* 
let numero = prompt ('ingrese un numero');
let texto = prompt ('ingrese un texto');


for (let index = 0; index < numero ; index++) {
console.log('texto');
    
} */

/* let cantidad = prompt('INGRESAR CANTIDAD DE REPETICIONES');
let texto    = prompt('INGRESAR TEXTO A REPETIR');
for (let index = 0; index < cantidad; index++) {
    console.log(texto);
}
 */




/* ACTIVIDAD 2 EL CUADRO ORDINARIO */

/* Solicitar al usuario un (1) un número. Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición. Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo. */

/* let numero = prompt('ingrese un numero');

for (let index = 0; index < numero; index++) {

    if (index >3) {
        break;
    }
alert(`lado`);
} */
    


/* let nombreclave= "voldemort"
let nombre = prompt('ingrese un nombre');

while (nombreclave !=nombre) {
 nombre =    prompt('ingrese otro nombre ');
}

alert('') */

/* let entrada    = prompt("INGRESAR NOMBRE");
let ingresados = '';
while (entrada != 'Voldemort') {
    ingresados += entrada +"\n";
    entrada     = prompt("INGRESAR NOMBRE");
}
alert(ingresados);
 */
/* 
Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
“Tomate” si es 1.
“Papa” si es 2.
“Carne” si es 3.
“Pollo” si es 4.
 */

/* let numero =parseInt(prompt('ingrese un numero '));
while (numero !="ESC") { 

   switch (numero) {
    case 1:
        alert('tomate');
        break;
   case 2:
   alert('papa');
    default:
        alert('error')
        break;
   }
} */


  /*  let entrada =  prompt("SELECCIONAR PRODUCTO DE 1 A 4");
while (entrada != 'ESC') {
    switch (entrada) {
        case "1":
            alert("Tomate");
            break;
        case "2":
            alert("Papa");
            break;
        case "3":
            alert("Carne");
            break;
        case "4":
            alert("Pollo");
            break;
        default:
            alert("Error");
            break;
    }
    entrada = prompt("SELECCIONAR PRODUCTO DE 1 A 4");
}
 */
/* 
function Persona(nombre,edad,calle,altura,){ 
    this.nombre =nombre;
    this.edad = edad ;
    this.calle = calle ;
    this.altura = altura;
    this.ladrar =function(){console.log('holaaa')}
}


const persona1= new Persona("angel",31,"moreno",178)
persona1.ladrar()

console.log(persona1)
 */


/* ejemplo de funcion contructora  */

/* function Persona(info){
    this.nombre=info.nombre;
    this.apellido=info.apellido;
    this.edad=info.edad;

}

Persona.prototype.correr = function(){
    console.log('esto es lo que hace correr')
}
Persona.prototype.saltar = function (){
    console.log('lo que hago es saltar')
}

const personita1 = new Persona({nombre:"angel" , apellido :"san luis", edad:20})
const persona2 = new Persona({nombre:"matias",apellido:"vicente", edad: 30})

console.log(personita1); */

 /* ejemplo de clase */


/* class Futbolista{
    constructor(nombre,apellido,edad,equipo){
        this.nombre= nombre;
        this.apellido =apellido;
        this.edad=edad;
        this.equipo=equipo;
    }


patear(){
    console('Aca esta pateando fuerte');
}

rematar(){
    console('aca remata fuerte');
}
}

const messi = new Futbolista ("lionel","messi",34,"Psg"),
ronaldo= new Futbolista('ronaldo',"Cristiano",35,"juventus");

console.log(messi);
console.log(ronaldo); */


/* const array = [1,2,3];
array.push("putito");
array.push("agregue otro");
array.push(2)

 */

/* const perros = ["caniche","doberman","colli"];
const gatos = ["siames","normal","negro"];
const mascotas = perros.concat(gatos);

const perros2 =mascotas.slice(0,3); */

/* alert(mascotas.indexOf("siames"))
alert(mascotas.includes("caniche"))
 */


/* for (let index = 0; index < perros2.length; index++) {
  alert(mascotas.reverse(index))
    
} */


/* const listadenombres =[];
let cantidad =5 ;
do {
    let entrada =prompt('ingresar nombre');
    listadenombres.push(entrada.toUpperCase());
    console.log(listadenombres.length);
    
} while (listadenombres.length !=cantidad)
const nuevalista= listadenombres.concat(["ana","emma"]);
alert(nuevalista.join("\n")); */

/* const nombres = ["angel","sofia","juan","martin","lucas"];
console.log(nombres.length ) */
/* const eliminar = (nombre) => {
    let index = nombres.indexof(nombre)
    if (index != -1 ){
        nombres.splice(index, 1)
    }
}
eliminar("sofia")

alert(nombres) */

/* class Producto {
    constructor (nombre,precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaiva() {
        this.precio = this.precio *1.21;
    }
}

const productos =[];
productos.push(new Producto("arroz","125"));
productos.push(new Producto("fideo","70"));
productos.push(new Producto("pan","50"));

for (const producto of productos) 
    producto.sumaiva();
     */
    