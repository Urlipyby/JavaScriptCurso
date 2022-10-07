class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClienteP extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome,email,cpf,saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor
    }

    exibirSaldoPoup(){
        console.log(this.saldoPoup)
    }
}

const marcus = new ClienteP("Marcus","marcus@email.com","45689302398",300,250)

marcus.exibirSaldoPoup()

marcus.exibirSaldo()

marcus.depositar(200)

marcus.depositarPoup(100)

console.log(marcus)