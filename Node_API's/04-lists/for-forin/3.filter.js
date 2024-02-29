const { obterPessoas } = require("./service");
Array.prototype.meuFilter = function (callback) {
  const list = [];
  for (i in this) {
    const item = this[i];
    const result = callback(item, i, this);
    //0, "", null, undefined === false
    if (!result) continue;
    list.push(item);
  }
  return list;
};

async function main() {
  try {
    const { results } = await obterPessoas("a");

    // const familiaLars = results.filter((item) => {
    //   const result = item.name.toLowerCase().indexOf("lars") !== -1;
    //   return result;
    // });
    const familiaLars = results.meuFilter((item) => {
      const result = item.name.toLowerCase().indexOf("lars") !== -1;
      return result;
    });

    const names = familiaLars.map((pessoa) => pessoa.name);

    console.log(names);
  } catch (error) {
    console.error(`erro interno`, error);
  }
}

main();
