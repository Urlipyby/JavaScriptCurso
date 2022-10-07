const cliente = {
    nome:"Marcus",
    idade:21,
    cpf:"45623789103",
    email:"marsonzedez@gmail.com",
    telefones:["15947562355", "11975672348"],
    dependentes:[{
        nome:"Nina",
        parentesco:"Cachorra",
        idade:"5 anos"
    }]
}

cliente.dependentes.push({
    nome:"Snoopy",
    parentesco:"Cachorro",
    idade:"12 anos"
})

console.log(cliente)

const cachorroMaisNovo = cliente.dependentes.filter(dependente => dependente.idade==="5 anos")

console.log(`O cachorro mais novo é ${cachorroMaisNovo[0].nome}`)