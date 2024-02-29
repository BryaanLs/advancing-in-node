const service = require("./service");
const { time, timeEnd } = console;

Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = [];
  for (let i = 0; i <= this.length - 1; i++) {
    const resultado = callback(this[i], i);
    novoArrayMapeado.push(resultado);
  }
  return novoArrayMapeado;
};

async function main() {
  try {
    const results = await service.obterPessoas("a");
    // const names = [];

    // ----------------------------------
    // time("forEach");
    // results.results.forEach((item) => {
    //   names.push(item.name);
    // });
    // timeEnd("forEach");
    // ----------------------------------
    // time("map");
    // const names = results.results.map((pessoa) => pessoa.name);
    // timeEnd("map");
    // ----------------------------------
    time("meuMap");
    const names = results.results.meuMap((pessoa) => pessoa.name);
    timeEnd("meuMap");
    // ----------------------------------
    console.log(`names`, names);
  } catch (error) {
    console.error(`erro interno`, error);
  }
}

main();
