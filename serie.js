export function  ulam (numero){
    let cadenaSerie = String(numero) + ''

    while(numero > 1){
        if(numero % 2 == 0)
            numero = numero / 2
        else
            numero = numero * 3 + 1
    }

    cadenaSerie = cadenaSerie + String(numero) + ''

    return cadenaSerie
}

export function fibonacci(limite){
    let x = 0
    let y = 1

    let cadenaSerie = String(x) + ' ' + String(y) + ' '
    let suma = 0

    for (let indice = 1; indice <= limite; indice++) {
        suma = x + y
        x = y
        y = suma

        cadenaSerie = cadenaSerie + String(suma) + ' '
    }

    return cadenaSerie
}

console.log(`Serie de ulam: ${ulam(20)}`)
console.log(`Serie de fibonacci: ${fibonacci(5)}`)
