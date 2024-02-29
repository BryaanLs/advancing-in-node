const { obterPessoas } = require("./service");

Array.prototype.meuReduce = function (callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];

  for (let i = 0; i < this.length; i++) {
    valorFinal = callback(valorFinal, this[i], this);
  }
  return valorFinal;
};

async function main() {
  try {
    const { results } = await obterPessoas("a");

    const pesos = results.map((item) => parseInt(item.height));
    // const total = pesos.reduce((ant, prox) => {
    //   return ant + prox;
    // });

    const minhaLista = [
      ["Bryan", "Soares"],
      ["NodeJs", "BraiaoDeDois"],
    ];

    const total = minhaLista
      .meuReduce((ant, prox) => {
        return ant.concat(prox);
      }, [])
      .join(", ");

    console.log(total);
  } catch (error) {
    console.error(`erro interno`, error);
  }
}

main();
