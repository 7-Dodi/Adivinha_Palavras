//Array que contém os dados de cada pergunta (Uma pista para a resposta e a resposta correta); 
const array = [
    {
        text: "Lugar onde as pessoas moram (4 letras)",
        palavra: "casa",
        number: 0
    },
    {
        text: "Comida derivada do milho (6 letras)",
        palavra: "cuscuz",
        number: 0
    },
    {
        text: "Marca de carros alemã (3 letras)",
        palavra: "bmw",
        number: 0
    },
    {
        text: "Estado do Nordeste (5 letras)",
        palavra: "ceará",
        number: 0
    },
    {
        text: "Rei do futebol (4 letras)",
        palavra: "pelé",
        number: 0
    },
    {
        text: "Time de futebol que não tem estádio (8 letras)",
        palavra: "flamengo",
        number: 0
    },
    {
        text: "Marca de carros norte-americana (4 letras)",
        palavra: "ford",
        number: 0
    },
    {
        text: "Comida derivada do cacau (9 letras)",
        palavra: "chocolate",
        number: 0
    },
    {
        text: "Maior campeão nacional brasileiro (9 letras)",
        palavra: "Palmeiras",
        number: 0
    },
    {
        text: "País de origem do Cr7 (8 letras)",
        palavra: "Portugal",
        number: 0
    }
]

let vidas = 3; //Variável que controla a quantidade de vidas do usuário;

//Constantes de interação com o usuário
const button = document.querySelector("#confirm");
const container= document.querySelector(".resposta");
const intro = document.querySelector(".title");
const text = document.querySelector("#text");

//Função para gerar um numero aleatório. Esse numero ira corresponde a uma posição do arrzy, que contém as informações da palavar
function gerarNumero (){
    let num = parseInt(Math.random() * array.length);
    if(num === 0){
        return num;
    }else{
        return num - 1;
    }
}

//Função para finalizar o jogo
function checkarItem (vidas){
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let vida = document.createElement("h4");

    div.appendChild(h2);
    div.appendChild(vida);
    container.appendChild(div);

    if(vidas === 0){
        div.classList.add("erro");

        let button = document.createElement("button");
        div.appendChild(button);
        button.textContent = "Reiniciar";
        button.addEventListener("click", ()=>{
            window.location.reload();
        });

        h2.textContent = "Jogo encerrado!!";
        vida.textContent = "Você perdeu";
    }
    else if(vidas === 6){
        div.classList.add("erro");

        let button = document.createElement("button");
        div.appendChild(button);
        button.textContent = "Reiniciar";
        button.addEventListener("click", ()=>{
            window.location.reload();
        });

        h2.textContent = "Jogo encerrado!!";
        vida.textContent = "Você Venceu, Parabens!!!";
    }
}

//Função para corrigir as respostas do usuário
function corrigirResposta (num){
    let palavra = document.querySelector("#palavra").value;
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let vida = document. createElement("p");

    div.classList.add("result");
    div.appendChild(h2);
    div.appendChild(vida);

    container.appendChild(div);

    if(palavra.toLowerCase() === array[num].palavra.toLowerCase()){
        h2.textContent = "Parabéns você acertou, continue assim...";
        vidas = vidas + 1;           
    }
    else{
        h2.textContent = "Você errou, tente novamente...";
        vidas = vidas - 1;
    }
}

//Função para controlar a quantidade de vida do usuário
function contagemVidas (){
    let vida = document.querySelector("#img");
    let inputVida = document.querySelector("#inputVida");
    inputVida.value = vidas;

    switch(vidas){
        case 0:
            vida.src = "./imagem/coracaoVazio.png";
        break;
        case 1: 
            vida.src = "./imagem/coracaoMetadMenor3.png";
        break;
        case 2: 
            vida.src = "./imagem/coracaoMetadMenor3.png";
        break;
        case 4:
            vida.src = "./imagem/coracaoMetadMaior3.png";
        break;
        case 5:
            vida.src = "./imagem/coracaoCompted.png"    
        break;
    }
}

//Controle do button para gerar a palavra
button.addEventListener("click", ()=>{
    container.textContent = "";

    let num = gerarNumero();
    text.value = array[num].text;
    
    let confirm = document.createElement("button");
    confirm.classList.add("confirm");
    container.appendChild(confirm);
    confirm.textContent = "Corfimar Palavra";
    
    confirm.addEventListener("click", ()=>{
        corrigirResposta(num);
    });
    checkarItem(vidas);
    contagemVidas();
});

//Atualizar o numero de vidas
contagemVidas();