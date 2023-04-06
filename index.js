// funciones normales y funciones flecha

function hola(){
    console.log("hola, mundo")
}
// hola()

const saludo = (x) => {
    return `hola ${x}`
}
// console.log(saludo('pedro'))

const suma = (x=0,y=3) => {
    return `la suma es ${x+y}`
}
// console.log(suma())

// -----------------------------------------
// objectos en js
const user = {
    name: "jair",
    cel: 232132,
    address: {
        cra: 23,
        no: '34-53',
        barrio: "lorenzo"
    },
    works: {
        fisrt: 'IS',
        second: 'doctor'
    },
    send(){
        return "sending.."
    }
}
// console.log(user.send())

const name = "rice"
const price = 2000

const Product = {
    name,
    price
}
// console.log(`el producto es ${name} y el costo es ${price}`)

// -----------------------------------------
// DOM
const input = document.createElement('input')
const button = document.createElement('button')
const div = document.createElement('div')

button.innerText = "button"
button.style = "background-color: red; border: 0; margin-left: 15px; cursor: pointer"

document.body.append(input)
document.body.append(button)
document.body.append(div)

// escuchas event-handlers
button.addEventListener("click", () => {
    const value = document.querySelector('input').value
    console.log(value)
    alert(`boton escuchando el valor del input es: ${value}`)
})

//destructura de datos
const student = {
    name: "carlos",
    age: 23
} 

function info ({age}){
    console.log(`<h1>nombre: ${student['name']}, edad ${student.age} /h1>`)
    return '<h1>'+'edad: '+age+'</h1>'
}

// div.innerHTML = info(student)
// console.log(info())

// -----------------------------------------
// metodo de arreglos
const names = ['juan', 'pedro', 'liz', 'lucas', 'lucas']

// forEach -> recorre el arreglo
// names.forEach(element => {
//     console.log(element)
// });

// map -> recorre el arreglo y lo convierte en una lista
let newNames = names.map(e =>{
    // console.log(e)
    return e
})
// console.log(newNames)

// find ->  busca un elemento en el arreglo
const valueFind = names.find(e =>{
    if(e=='lucas'){
        return e
    }
})
// console.log(valueFind)

// filter -> filtrar elementos de un arreglo
let c = 0
const count = names.filter(e => {
    if(e == "lucas"){
        c += 1
        return e
    }
})
// console.log(count+" aparece "+c+" veces")

// concatenar arrays

const nFisrt = ['1','2','3']
const nSecond = ['4','5','6']

let merge = nFisrt.concat(nSecond)
// console.log(merge)

// spread operatos

// console.log({...nFisrt, ...nSecond})

// -----------------------------------------
// Ecmastcript modules
// enviar funciones de un modulo a otro

// import e from './module.js'
import {plus, takeAwey} from './module.js'

// console.log(plus(2,2))
// console.log(takeAwey(20,2))
// console.log(e)

// -----------------------------------------
// async - await

const student2 = {
    name: "carlos",
    age: 23,
    // frieds: ['luis', 'paco']
} 

// console.log(student2.frieds?.[0])
const ul = document.createElement("ul")

// let data = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(function(response){
//         return response.json()
//     }).then(function(data){
//         data.forEach(e => {
//             const li = document.createElement("li")
//             li.innerText = e.name
//             ul.append(li)
//         });
//         // console.log(data)
//         document.body.append(ul)
//     })
 

async function datas(){ 
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    data.forEach(e => {
        const li = document.createElement("li")
        li.innerText = e.name
        ul.append(li)
    });
    // console.log(data)
    document.body.append(ul)

}

datas()