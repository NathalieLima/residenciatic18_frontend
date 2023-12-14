let elemento = document.getElementsByClassName("roteiros-viagens");

console.dir(elemento[0].childNodes);

let lista = elemento[0].childNodes;
let lista2 = elemento[0].children;

for (const item of lista) 
{
    if ( item.innerText != undefined && item.innerText != "" ) {
        console.log(item.innerText);
    }
}

let listinha = Array.from(lista);

console.log(listinha);
let filtrados = listinha.filter(item => item.innerText != undefined && item.innerText != "");
console.log(filtrados);

let chaves = filtrados.map(item => item.nodeName)
console.log(chaves)
let valores = filtrados.map(item => item.innerText)

const resultMap = {};

for (let i = 0; i < chaves.length; i++) {
    resultMap[chaves[i]] = valores[i];
  }

let json = JSON.stringify(resultMap)
console.log(json)