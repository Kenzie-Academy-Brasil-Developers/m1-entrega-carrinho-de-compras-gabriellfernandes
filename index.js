const productsCart = [
    {
        id: 0,
        name: "Uva Crimson",
        price: 20.00,
        quantidade: 0
    },
    {
        id: 1,
        name: "Ferrero rocher",
        price: 5.00,
        quantidade: 0
    },
    {
        id: 2,
        name: "Chocolate 1kg",
        price: 25.00,
        quantidade: 0
    },
    {
        id: 3,
        name: "Água com gás",
        price: 5.00,
        quantidade: 0
    }
]

const body = document.querySelector("body")

const main = document.createElement("main")
main.className = "tamanho"
body.appendChild(main)

const finalizar = document.createElement("button")
finalizar.innerText = "Finalizar"
finalizar.className = "botao"
//Criando a lista nao ordenada
    const listaDeCompras = document.createElement("ul")
    main.appendChild(listaDeCompras)
    //criando a li
        const indicador = document.createElement("li")
        
        const nome = document.createElement("p")
        nome.innerText = "Nome"
        nome.className = "nome"

        const quantidade = document.createElement("p")
        quantidade.innerText = "Quantidade"
        quantidade.className = "quantidade"

        const preco = document.createElement("p")
        preco.innerText = "Preço"
        preco.className = "preco"

        indicador.id = "nomes"
        indicador.appendChild(nome)
        indicador.appendChild(quantidade)
        indicador.appendChild(preco)
        listaDeCompras.appendChild(indicador)
    
    //criando o primeiro item
    function criandoItem (){
        for (let i = 0; i < productsCart.length; i++) {
            const item1 = document.createElement("li")
        
            const nome1 = document.createElement("p")
            nome1.innerText = productsCart[i].name
            nome1.className = "nome"
    
            const quantidade1 = document.createElement("p")
            quantidade1.innerText = productsCart[i].quantidade
            quantidade1.className = "quantidade"
    
            const p1 = document.createElement("p")
            p1.innerText = productsCart[i].price  + ",00 R$"
            p1.className = "preco"
            
            item1.id = productsCart[i].id
            
            item1.appendChild(nome1)
            item1.appendChild(quantidade1)
            item1.appendChild(p1)
            listaDeCompras.appendChild(item1)
            
            console.log(item1.id)
            

        }

    }

    criandoItem()

    //criando a fuction de evento para aumentar a quantidade
    document.getElementById("0").addEventListener("click", function(){
        productsCart[0].quantidade += 1
        document.getElementsByClassName("quantidade").innerText = productsCart[0].quantidade
    }) 

    ///Botao de finalizar

    main.appendChild(finalizar)