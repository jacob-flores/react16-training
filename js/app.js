// var nombre = "Yako";
// console.log("Nombre: " + nombre);

// var numero = 1280;
// console.log("Número: " + numero);

// var sinDefinir;
// console.log("sin Definir: " + sinDefinir);

// //Variables con const y LEt
// const myApp = "nomApp";
// console.log("Nombre de la App: " + myApp);

// let variableLet = 1280;
// console.log("variable con Let: " + variableLet);

// var musica = "rock";
// if(musica){
//     let musica = "Rock en español";
//     console.log('Tipo de música: ', musica);
// }
// console.log('Tipo de música: ', musica);

// //Uso de Template String
// var nombre = "Jacob";
// var apellido = "Flores";

// console.log(`Nombre: ${nombre}, Apellido: ${apellido}`);
// console.log(`Nombre: ${nombre} ${apellido}`);

// const contenedorApp = document.querySelector('#app');
// let html = `
//             <ul>
//                 <li>Nombre: ${nombre}</li>
//                 <li>Apellido: ${apellido}</li>
//             </ul>
//         `;
// contenedorApp.innerHTML = html;

//arrow function
// let suma = (numero1, numero2) => numero1 + numero2;

// let miSuma = suma(9,4);
// console.log(`La suma equivale a ${miSuma}`);

//Object constructor

// function Persona(nombre, edad, ciudad){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.ciudad = ciudad;
// }
// Persona.prototype.religion = 'Christian';
// Persona.prototype.PrintData = function(){
//     return `La persona se llama ${this.nombre} y
//             es de religión ${this.religion}
//     `
// }

// let Persona1 = new Persona('Hugo', 35, 'Saltillo');
// let Persona2 = new Persona('Paco', 45, 'Torreón');
// let Persona3 = new Persona('Luis', 55, 'Monclova');

// console.log(Persona1);
// console.log(Persona1.PrintData());
// console.log(Persona2.PrintData());


//Con prototype se puede extender las propiedadas y/o métodos de un objeto


//=========Destructuring
// let automovil = {
//     version: {
//         austera: 'ST',
//         equipada: 'LX'
//     },
//     tipo: ['Coupé', 'Sedán', 'Sport']
// }

// let {equipada} = automovil.version;
// console.log(`La versión seleccionada es: ${equipada}`);

//Object literal enhancement
//Operación contraria a Destructuring. Sirve para colocar información en un objeto

// let marca = 'Nissan';
// let modelo = '2001';
// let especificaciones = ['manual', 'deportivo', 'clima'];

// let automovil = {marca, modelo, especificaciones};
// console.log(automovil);

//Añadiendo funciones a un objeto

let automovil = {
    marca: 'Nissan',
    modelo: '2001',
    mostrarInformacion(){
        console.log(`El auto es marca ${this.marca} y modelo ${this.modelo}`)
    }
}

console.log(automovil);
automovil.mostrarInformacion();
console.log(Object.keys(automovil));