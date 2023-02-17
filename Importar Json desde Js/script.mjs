import lista from "./src/fakeApi/data.json" assert {type : 'json'};
// console.log(lista);

let person = {
    nombre: 'Carlos',
    apellido: 'Castellar',
    edad: 31
}


let {nombre, ...rest} = person

console.log(nombre);

console.log(rest);