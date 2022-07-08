/* function Personajes(nombre,rol,dificultad,poder){
this.nombre=nombre;
this.altura=rol;
this.edad=dificultad;
this.poder=poder;
this.atacar= function(){
    console.log('estoy atacando');
}

}
const superman = new Personajes ("Kayn","jungla","medio","meterse dentro de las personas"); */

/* console.log(superman) */
/* 
class Personajes2{ 
    constructor(nombre,rol,dificultad,poder){ 
    this.nombre=nombre;
    this.rol=rol;
    this.dificultad=dificultad;
    this.poder=poder;
}
ataque(){
    console.log('pim pim pimm')
}
}

const garen = new Personajes2 ("garen","top","facil","te oneshotea con ulti");

console.log(garen)

garen.ataque() */




/* class Persona {
    constructor(nombre, apellido, altura, telefono, colorPelo,hermanos) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
        this.telefono = telefono;
        this.colorPelo = colorPelo;
        this.hermanos=hermanos;
    }
}


    const luca = new Persona ("lucas","biancheti",1.78,2235923,"negro");
    const goyo = new Persona("Alfredo","ferreira",1.80,22325124,"rojo",["lucas","brisa","tomas"]);

console.log(luca)
console.log(goyo);
    const hermanos = luca.hermanos;

alert(hermanos) */


/* const personas = [
    {nombre:"angel",precio:3000},
    {nombre:"lucas",precio:4000},
    {nombre:"martin",precio:7000}
]

const nombres = personas.map((el => el.nombre));
console.log(nombres)
console.log(personas)

const actualizado = personas.map((el)=>{
    return{ 
        nombre:el.nombre,
        precio:el.precio*1.25
}
})

console.log(actualizado) */

class Tienda {
    constructor (nombre,direccion,propiedad,rubro){
        this.nombre=nombre;
        this.direccion=direccion;
        this.propiedad=propiedad;
        this.rubro=rubro;
    }
}


/* let ingresados = '';
for (let index = 0; index < 5; index++) {
    let tienda =  new Tienda(prompt("NOMBRE"), 
                             prompt("DIRECCION"), 
                             prompt("PROPIETARIO"),
                             prompt("RUBRO"));

    ingresados+= "Tienda: "+tienda.nombre+" "+
             "Direccion: "+tienda.direccion+" "+
             "Propitario: "+tienda.propietario+" "+
             "rubro: "+tienda.rubro+"\n";
}
alert(ingresados); */
    alert(' Bienvenido Apreta F12 para conocer nuestro menu')

class Menu{
    constructor (infusion,comidas,precio){
        this.infusion=infusion;
        this.comidas=comidas;
        this.precio=precio;
    }
}

const menu1 = new Menu("cafe","3 medialunas",300);
const menu2 = new Menu("submarino","tostado de jamon y queso",500);
const menu3 = new Menu("Late","tostadas con mermelada",450);

const array = [menu1,menu2,menu3];

/* let opccion= confirm('Desea ver el menu?') */


if (confirm("desea ver el menu?") == true) {
    console.log(menu1)
    console.log(menu2)
    console.log(menu3)
} else {
  alert('No hay problema vuelva en otro momento')
}



let opccionElegida= Number(prompt("elija una de las siguientes opciones \n 0.Menu1 \n 2.Menu1 \n 3.Menu2"))

switch (opccionElegida) {
    case 0:
        alert('usted eligio el menu ')
        break;
     case 1:  
         break;
     case 2:
         break;
        
    default:
        break;
}

/* console.log(menu1)
console.log(menu2)
console.log(menu3)
 */



/* 
let array = ["cafe","medialuna","soda"];
array.push('felipe');
console.log(array)

let opccion = Number( prompt('elija una opccion'));
switch (opccion) {
    case 1: {
        array.push('leche')
    }
        break;

    default:
        break;
}

console.log(array) */