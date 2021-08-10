function solucao(sequencia) {
  i = 0;
  dir = 0;
  esq = 0;
  tot = 0;  
      while (i <= sequencia.length){
          if(sequencia[i] == ">"){
             dir++;
             }
          if(sequencia[i]== "<"){
             esq++;
             }
          i++;
      }
  
          tot = dir-esq;
  
      if (tot > 6){
          while (tot > 6){
          tot = tot-7
          }
      }else if(tot < 0){
          while (tot < 0){
          tot = tot+7
          }
      }
      console.log (tot);
  }