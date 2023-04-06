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

console.log(suma())