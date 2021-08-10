function solucao(primeiraLetra, segundaLetra, palavras) {
  i = 0;
  ii = 0;
  musica = [];
  while (i < palavras.length){
  if ((palavras[i])[0] == primeiraLetra && (palavras[i])[1] == segundaLetra){
      musica.push(palavras[i]);
  }
      i++
  }