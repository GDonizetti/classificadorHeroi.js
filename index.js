function calculadorRank(vitorias, derrotas) {
 const saldo = vitorias - derrotas;
  
 let nivel= "";  
 if (saldo <= 10) {
    nivel = "Ferro";
     } else if (saldo <= 20) { 
        nivel = "Bronze";
      } else if (saldo <= 50) { 
        nivel = "Prata";
      } else if (saldo <= 80) {
        nivel = "Ouro";
      } else if (saldo <= 90) {
        nivel = "Diamante";
      } else if (saldo <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return (saldo, nivel);
    }

    const vitorias = 55;
    const derrotas = 10;

    const {saldo, nivel} = calculadorRank(vitorias, derrotas);
    console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}.`);

