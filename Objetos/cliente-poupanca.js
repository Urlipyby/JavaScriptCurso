function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const andre = new Cliente("Andre", "12312312312", "andre@email.com", 100)

const thomas = new ClientePoupanca("Thomas", "56324198745", "thomas@gmail.com", 100, 300)

console.log(thomas)

ClientePoupanca.prototype.depositarPoup = function(valor){ // cria uma função no objeto de forma implícita
    this.saldoPoup += valor
}

thomas.depositarPoup(50)

console.log(thomas) // Não mostra a função recém criada, pois ela foi colocada no prototype

console.log(andre.hasOwnProperty("saldoPoup"))
console.log(thomas.hasOwnProperty("saldoPoup"))
console.log(andre instanceof Cliente)
console.log(typeof andre)
console.log(typeof thomas)
console.log(thomas instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)