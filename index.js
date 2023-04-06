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