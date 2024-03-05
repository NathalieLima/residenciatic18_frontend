"use strict";
// let dado: string = 'romero';
// console.log(dado)
// // https://v2.jokeapi.dev/joke/Any?lang=pt
// async function chamarAPI()
// {
//     const URL_TABLE: string = `https://v2.jokeapi.dev/joke/Any?lang=pt`;
//     const options = {
//         method: "GET", 
//         headers: {"Content-Type": "application/json"}
//       }
//     const RESPONSE = await fetch(URL_TABLE, options);
//     const JSON_RESPONSE = await RESPONSE.json();
//     let valor: any;
//     JSON_RESPONSE
//         .then( (value: any) => console.log(value) );
//     return valor;
// }
// let teste = chamarAPI()
// console.log(teste);
// // teste
// // console.log(valor)
// // console.log(valor['setup'])
const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
console.log(fetchPromise);
fetchPromise.then((resposta) => {
    console.log(`Resposta recebida: ${resposta.status}`);
});
console.log("Requisição iniciada…");
