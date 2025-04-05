function jogar() {
  ganhou = 0;
  for (let rodada = 1; rodada <= 3; rodada++) {
    console.log("Rodada: " + rodada);

    escolhaJogador = prompt("Nível: " + rodada + " troncos (1, 2 ou 3)?");
    if (
      escolhaJogador == null ||
      isNaN(escolhaJogador) ||
      escolhaJogador > 3 ||
      escolhaJogador < 1
    ) {
      alert("Por favor, insira uma das opções! (1, 2 ou 3)");
    }
  }
  while (
    escolhaJogador === null ||
    isNaN(escolhaJogador) ||
    escolhaJogador > 3 ||
    escolhaJogador < 1
  );
  escolhaJogador = Number(escolhaJogador);
  let troncoRachado = Math.floor(Math.random() * 3) + 1;
  //Se o jogador escolher o tronco que está rachado:
  if (escolhaJogador == troncoRachado) {
    alert("Ah não! Você escolheu o tronco rachado!");
    rodada = 10;
    ganhou = 0;
  } else {
    alert(
      "Conseguiu! Pressione OK para avançar. O tronco rachado era o: " +
        troncoRachado
    );
  }
  if (ganhou == 0) {
    alert("Você chegou ao outro lado do rio, venceu o jogo!");
  }
}