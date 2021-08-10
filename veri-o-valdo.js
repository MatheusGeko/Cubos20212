function solucao(obras) {
  i = 0;
  maior = ("");
  vmaior = 0;
      
  while (i < obras.length){
      ii = i-1;
      if(obras[i].valor > maior){
          maior = obras[i].valor;
          vmaior = obras[i].nome;
      }
      i++;
  }
      console.log (vmaior);
      
  }