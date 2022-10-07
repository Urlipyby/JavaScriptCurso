function Cliente(nome,cpf,email,saldo){

    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const marcus = new Cliente("Marcus", "46598732165", "marsonzedez@gmail.com", 150)
const felipe = new Cliente("Felipe", "12356798456", "FELIPAOTOP@gmail.com", 100)

console.log(marcus)
console.log(felipe)