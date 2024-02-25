const EventEmitter = require("events");
class MeuEmissor extends EventEmitter {}
const meuEmissor = new MeuEmissor();
const nomeEvento = "usuario:click";
meuEmissor.on(nomeEvento, function (click) {
  console.log("um usuario clicou", click);
});

// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'no ok')

// let count = 0
// setInterval(function () {
//     meuEmissor.emit(nomeEvento, 'no ok' + (count++))

// }, 1000)

const stdin = process.openStdin();

function main() {
  return new Promise(function (resolve, reject) {
    stdin.addListener("data", function (value) {
      // console.log(`Voce digitou: ${value.toString().trim()}`)
      return resolve(value);
    });
  });
}
main().then(function (resultado) {
  console.log("resultado", resultado.toString());
});

//* Não é aconselhavel utilizar promises ao trabalhar com eventos, pois ao utilizar o resolve() ele irá resolver o valor apenas uma vez e posteriormente quando o evento foi chamado novamente o valor não sera armazenado ou manipulado
