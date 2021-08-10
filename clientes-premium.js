function solucao(precos) {
  i = 0;
  maior = 0;
  soma = 0;
  while (i < precos.length){
   if (precos[i] > maior){
       maior = precos[i];
   }
   soma += precos[i];
   i++
  }
      