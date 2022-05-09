const productsCart = [
    {
        id: 1,
        name: "Uva cara",
        price: 20.00
    },
    {
        id: 2,
        name: "Guarrafa de água 500ml",
        price: 5.00
    },
    {
        id: 3,
        name: "Chocolate 1kg",
        price: 25.00
    },
    {
        id: 4,
        name: "Água com gás",
        price: 5.00
    }
]

/* const div1 = document.getElementById("tamanho")

const main = document.createElement("main")
div1.appendChild(main)

const tamanhoDiv = document.createElement("div")
tamanhoDiv.className = "tamanhoDiv"
main.appendChild(tamanhoDiv)

const finaliza = document.createElement("button")
finaliza.innerText = "Finalizar"

let soma = 0

const listaDeCompras = document.createElement("ul")
main.appendChild(listaDeCompras)

const item1 = document.createElement("li")

const produto1 = document.getElementById("1")
document.getElementById("1").addEventListener("click", event =>{
    productsCart.name = document.querySelectorAll("figcaption"[0])
    listaDeCompras.appendChild(item1)
    console.log(productsCart.name)
    console.log(document.querySelectorAll("figcaption"[0]).values)
})
item1.innerText = productsCart.name */

const body = document.querySelector("body")

const main = document.createElement("main")
main.className = "tamanho"
body.appendChild(main)

const finalizar = document.createElement("button")
finalizar.innerText = "Finalizar"

const listaDeCompras = document.createElement("ul")
main.appendChild(listaDeCompras)

const indicador = document.createElement("li")
indicador.innerText = "Nome"

const preco = document.createElement("p")
preco.innerText = "Preço"

indicador.appendChild(preco)
listaDeCompras.appendChild(indicador)

const item1 = document.createElement("li")
item1.innerText = productsCart[0].name

const p1 = document.createElement("p")
p1.innerText = productsCart[0].price

item1.appendChild(p1)
listaDeCompras.appendChild(item1)