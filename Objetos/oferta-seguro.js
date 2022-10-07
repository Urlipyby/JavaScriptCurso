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

function oferecerSeguro(obj){

    const propsClientes = Object.keys(obj)
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }

}

console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)