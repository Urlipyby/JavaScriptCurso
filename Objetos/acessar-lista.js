const cliente = {
    nome:"Marcus",
    idade:21,
    cpf:"45623789103",
    email:"marsonzedez@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))