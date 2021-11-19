/* perguntar ao usuario 
com quantas cartas quer jogar */
let qntCartas = prompt("Bem vindo ao Parrot! Com quantas cartas quer jogar? (2, 4, 6, 8, 10, 12 ou 14)", );

/* O usuário só poderá inserir números pares no prompt, de 4 a 14.
Qualquer número que fuja a essa regra não deve ser aceito. 
No caso de números inválidos, o prompt deverá ficar sendo repetido,
até que o usuário coloque um número válido. */
while ( (qntCartas%2 !== 0) || (qntCartas < 2) || (qntCartas > 14) ) {
    qntCartas = prompt("Escolha entre os seguintes números: 2, 4, 6, 8, 10, 12 ou 14");
}

/* Após inserir um número de cartas válido, o jogo deverá 
inserir as cartas viradas pra baixo na página 
de forma que a distribuição seja aleatória */

const cartasPossiveis = [`<div class="carta" onclick="virarCarta(this)"> <img class="paraBaixo" src="imagens/front.png" id="front"/> <img class="paraCima sumir" src="./imagens/bobrossparrot.gif" id="bobrossparrot"/> </div>`, `<div class="carta" onclick="virarCarta(this)"><img class="paraBaixo" src="imagens/front.png" id="front"/><img class="paraCima sumir" src="./imagens/explodyparrot.gif" id="explodyparrot"/></div>`, `<div class="carta" onclick="virarCarta(this)"><img class="paraBaixo" src="imagens/front.png" id="front"/><img class="paraCima sumir" src="./imagens/fiestaparrot.gif" id="fiestaparrot"/></div>`, `<div class="carta" onclick="virarCarta(this)"><img class="paraBaixo" src="imagens/front.png" id="front"/><img class="paraCima sumir" src="./imagens/metalparrot.gif" id="metalparrot"/></div>`, `<div class="carta" onclick="virarCarta(this)"><img class="paraBaixo" src="imagens/front.png" id="front"/><img class="paraCima sumir" src="./imagens/revertitparrot.gif" id="revertitparrot"/></div>`, `<div class="carta" onclick="virarCarta(this)"><img class="paraBaixo" src="imagens/front.png" id="front"/><img class="paraCima sumir" src="./imagens/tripletsparrot.gif" id="tripletsparrot"/></div>`, `<div class="carta" onclick="virarCarta(this)"><img class="paraBaixo" src="imagens/front.png" id="front"/><img class="paraCima sumir" src="./imagens/unicornparrot.gif" id="unicornparrot"/></div>`];
let cartasNoJogo = [];

for(let i = 0; i < qntCartas/2; i++) {
    cartasNoJogo.push(cartasPossiveis[i]);
    cartasNoJogo.push(cartasPossiveis[i]);
}

cartasNoJogo.sort(comparador);

const tabuleiro = document.querySelector("main");

for(let i = 0; i < qntCartas; i++) {
    tabuleiro.innerHTML += cartasNoJogo[i];
}

function comparador() {
    return Math.random() - 0.5;
}

/* Ao clicar em uma carta, a mesma deve ser virada */
/* Caso seja a primeira carta do par, ela deve permanecer virada até o usuário escolher a segunda carta */
/* Caso seja a segunda carta virada, existem 2 situações: */
    /* 1) Caso seja igual à primeira carta, o usuário acertou e ambas agora devem ficar viradas pra cima até o final do jogo */
    /* 2) Caso seja uma carta diferente da primeira carta virada, o usuário errou. Nesse caso, o jogo deve aguardar 1 segundo e então virar as duas cartas para baixo novamente */
/* Quando o usuário terminar de virar todas as cartas corretamente, deverá ser exibido um alert com a mensagem "Você ganhou em X jogadas!" sendo X a quantidade de vezes que o usuário virou uma carta no jogo. */

    let contadorDeViradas = 0;
let matched = 0;

function virarCarta(element) {
    contadorDeViradas++;
    if( (element.classList.contains("first") === false) && (element.classList.contains("matched") === false)) {
        element.querySelector(`.paraBaixo`).classList.toggle("sumir");
        element.querySelector(`.paraCima`).classList.toggle("sumir");
        if(document.querySelector(`.first`) === null) {
            element.classList.add("first");
        } else if (document.querySelector(`.first`).querySelector(`.paraCima`).id === element.querySelector(`.paraCima`).id ){
            document.querySelector(`.first`).classList.add("matched");
            document.querySelector(`.first`).classList.remove("first");
            element.classList.add("matched");
            matched++;
            if (matched === qntCartas/2) {
                alert(`Você ganhou em ${contadorDeViradas} jogadas!`);
            }
        } else {
            element.classList.add("unmatched");
            setTimeout(voltarParaBaixo, 1000);
        }
    }
}

function voltarParaBaixo() {
    document.querySelector(`.unmatched`).querySelector(`.paraBaixo`).classList.toggle("sumir");
    document.querySelector(`.unmatched`).querySelector(`.paraCima`).classList.toggle("sumir");
    document.querySelector(`.unmatched`).classList.remove("unmatched");
    document.querySelector(`.first`).querySelector(`.paraBaixo`).classList.toggle("sumir");
    document.querySelector(`.first`).querySelector(`.paraCima`).classList.toggle("sumir");
    document.querySelector(`.first`).classList.remove("first");
}






