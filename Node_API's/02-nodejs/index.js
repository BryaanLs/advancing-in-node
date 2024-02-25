/*
 0 Obter um usuario
 1 Obter o numero de telefone de um usuario a partir de seu ID
 2 Obter o endereco do usuario pelo id
*/

const util = require("util");

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: "Aladin",
        birthDate: new Date(),
      });
    }, 1000);
  });
}

function getTel(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        tel: "11990022",
        ddd: 11,
      });
    }, 2000);
  });
}

function getAdress(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        adress: "Rua do rocio",
        number: 291,
        bairro: "Vila xernas",
      });
    }, 2000);
  });
}

async function main() {
  try {
    console.time("medida-promise");
    const usuario = await getUser();
    // const telefone = await getTel(usuario.id);
    // const adress = await getAdress(usuario.id);
    const resultado = await Promise.all([
      getTel(usuario.id),
      getAdress(usuario.id),
    ]);

    const [telefone, adress] = resultado;
    console.log(`
    Nome: ${usuario.name},
    Telefone: (${telefone.ddd}) ${telefone.tel}
    Endereço: ${adress.adress} - N°${adress.number}
    `);

    console.timeEnd("medida-promise");
  } catch (error) {
    console.error("DEU RUIM", error);
  }
}

main();

// const userPromise = getUser();
// userPromise
//   .then((usuario) => {
//     return getTel(usuario.id).then(function resolverTelefone(result) {
//       return {
//         usuario: {
//           nome: usuario.name,
//           id: usuario.id,
//         },
//       };
//     });
//   })
//   .then(({ adress, number, rua }) => {
//     return getAdress(usuario.id);
//   })
//   .then(function (resultado) {
//     console.log("Result: ", resultado);
//   })
//   .catch((e) => console.error("ERROR", e));

// getUser(function resolverUsuario(error, usuario) {
//   //  null || "" || 0 === false
//   if (error) {
//     console.error("DEU RUIM em USUARIO", error);
//     return;
//   }
//   getTel(usuario.id, function resolverTelefone(error2, telefone) {
//     if (error2) {
//       console.error("DEU RUIM em TELEFONE", error2);
//       return;
//     }
//     getAdress(usuario.id, function resolveAdress(error3, adress) {
//       if (error3) {
//         console.error("DEU RUIM em ENDEREÇO", error3);
//         return;
//       }

//       console.log(`
//       Nome: ${usuario.name},
//       Endereço: ${adress.adress} N° ${adress.number},
//       Telefone: (${telefone.ddd}) ${telefone.tel}

//       `);
//     });
//   });
// });

// const telefone = getTel(user.id);
