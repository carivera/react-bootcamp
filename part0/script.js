const list = []
const anotherList = list.concat(157)

const persona = {
    name: 'Carlos',
    twitter: '@utlgamerz',
    age: 38,
    isDeveloper: true,
    links: ['https://turiteandoenmoto.com', 'https://instcode.com']
}

const sumar = (operando1, operando2) =>  {
    console.log(operando1)
    console.log(operando2)

    return operando1 + operando2
}

console.log(sumar(15,20))