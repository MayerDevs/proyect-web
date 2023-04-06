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