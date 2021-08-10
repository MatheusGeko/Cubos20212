function solucao(obj) {
  if (obj.jaTomouVacina == false){
      if (obj.idade >= 60){
          console.log ("APTA POR IDADE");
      }else if (obj.temComorbidade == true){
          console.log ("APTA POR COMORBIDADE");
      }else {
          console.log ("INAPTA");
      }
  }else {
      console.log ("JA TOMOU VACINA");
  }