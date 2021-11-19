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

const cartasPossiveis = [`<div class="carta"><img src="imagens/front.png" alt="front"/><img class="sumir" src="./imagens/bobrossparrot.gif" alt="bobrossparrot"/></div>`, `<div class="carta"><img src="imagens/front.png" alt="front"/><img class="sumir" src="./imagens/explodyparrot.gif" alt="explodyparrot"/></div>`, `<div class="carta"><img src="imagens/front.png" alt="front"/><img class="sumir" src="./imagens/fiestaparrot.gif" alt="fiestaparrot"/></div>`, `<div class="carta"><img src="imagens/front.png" alt="front"/><img class="sumir" src="./imagens/fiestaparrot.gif" alt="fiestaparrot"/></div>`, `<div class="carta"><img src="imagens/front.png" alt="front"/><img class="sumir" src="./imagens/revertitparrot.gif" alt="revertitparrot"/></div>`, `<div class="carta"><img src="imagens/front.png" alt="front"/><img class="sumir" src="./imagens/tripletsparrot.gif" alt="tripletsparrot"/></div>`, `<div class="carta"><img src="imagens/front.png" alt="front"/><img class="sumir" src="./imagens/unicornparrot.gif" alt="unicornparrot"/></div>`];
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








