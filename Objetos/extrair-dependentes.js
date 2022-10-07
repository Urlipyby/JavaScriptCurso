const clientes = [{
    nome:"Marcus",
    cpf:"45623789103",
    dependentes:[{
        nome:"Nina",
        parentesco:"Cachorra",
        idade:"5 anos"
    },
    {
        nome:"Snoopy",
        parentesco:"Cachorro",
        idade:"12 anos"
    }]
    },
    {
        nome:"Joelma",
        cpf:"35978462130",
        dependentes: [{
          nome: "Marcus",
          parentesco: "Filho",
          idade: "21 anos"
        }]
    }
]

let listaDependentes

for(let x = 0; x < clientes.length; x++){

    listaDependentes = clientes[x].dependentes
}


console.table(listaDependentes)