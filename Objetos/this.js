// const pessoa = {
//     nome: "Ana",
//     email: "a@email.com",
//     imprimeinfo: imprimeNomeEmail
//    }

//    function imprimeNomeEmail(){
//     console.log(`nome: ${this.nome}, email ${this.email}`)
//    }

//    pessoa.imprimeinfo()

function Pessoa(nome, email){
    this.nome =nome
    this.email =email
    this.imprimeNomeEmail = function(){
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }
}

const pessoa1 = new Pessoa("Ana", "a@email.com")
const pessoa2 = new Pessoa("Paula", "p@email.com")

pessoa1.imprimeNomeEmail()

pessoa2.imprimeNomeEmail()
