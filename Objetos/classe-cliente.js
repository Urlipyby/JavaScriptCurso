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

const marcus = new Cliente("Marcus", "marcus@email.com", "46321597852", 300)

marcus.depositar(100)

marcus.exibirSaldo()

console.log(marcus)