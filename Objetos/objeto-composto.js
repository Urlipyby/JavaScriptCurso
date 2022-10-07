const cliente = {
    nome:"Marcus",
    idade:21,
    cpf:"45623789103",
    email:"marsonzedez@gmail.com",
    telefones:["15947562355", "11975672348"]
}

cliente.dependentes = {
    nome:"Nina",
    parentesco:"Cachorra",
    idade:"5 anos"
}

// console.log(cliente)

cliente.dependentes.nome = "Nina Lopes"

console.log(cliente)