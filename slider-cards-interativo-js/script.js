

// Console e um objeto pronto em javascript
// todo metodo e uma função
// funão é uma ação


// Tipos de dados em JavaScript
// 1 -> String = texto
// 2 -> Number = numeros
// 3 -> Boolean = true ou false
// 4 -> Undefined = indefinido
// 5 -> Null = nulo
// 6 -> Object = objeto
// 7 -> Array = lista de dados / grupamento de elementos


// Sempre mapear os elementos que serão utilizados



// Eventos -> clique, passar o mouse
// Variável -> caixinha onde armazena algo vulgo let ou const

let botaoProximo = document.querySelector(".proximo");
let listaImagens = document.querySelectorAll("img")
let botaoAnterior = document.querySelector(".anterior");

let contador = 0

console.log(listaImagens)



botaoProximo.onclick = function passarSlide(){
    document.querySelector("img.ativo").classList.remove("ativo")

    if(contador < 2){
        contador = contador + 1
    
    }else {
        contador = 0
    }
    
    
  
    console.log(contador)

    listaImagens[contador].classList.add("ativo")
    

}



botaoAnterior.onclick = function voltarSlide(){
    document.querySelector("img.ativo").classList.remove("ativo")

    
    if(contador > 0){
        contador = contador - 1
    }else {
        contador = 2
    }

    listaImagens[contador].classList.add("ativo")
}
