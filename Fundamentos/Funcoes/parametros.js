// parametros de função

function soma(num1, num2){
    return num1 + num2;
}

// console.log(soma(2, 2))
// console.log(soma(79, 25))
// console.log(soma(-200, 4))

// parametro != argumento

//ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade("Marcus", 21))

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplica(soma(2, 3)))