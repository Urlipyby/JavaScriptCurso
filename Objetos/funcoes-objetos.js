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
    },
    {
        nome:"Snoopy",
        parentesco:"Cachorro",
        idade:"12 anos"
    }],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)

