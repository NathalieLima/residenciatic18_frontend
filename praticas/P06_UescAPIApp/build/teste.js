var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jquery from "jquery";
const $ = jquery;
// Puxar dados da API
fetchDados();
let dadosCarrossel = [
    { link: './assets/foto-campus.webp', alt: "Foto do campus da UESC" },
    { link: "./assets/foto-estudantes.jpg", alt: "Foto de estudantes no campus da UESC" }
];
let valor = 1;
let imagem = document.querySelector('img');
let numeroImagem = document.querySelector('#numeroImagem');
let botaoSubtrair = document.querySelector('#sub');
let botaoAdicionar = document.querySelector('#add');
if (botaoSubtrair && (valor >= 1 && valor <= dadosCarrossel.length)) {
    botaoSubtrair.addEventListener('click', () => {
        if (valor > 1) {
            valor--;
            exibirValor(); // Atualiza o valor após a subtração
        }
    });
}
if (botaoAdicionar) {
    botaoAdicionar.addEventListener('click', () => {
        if (valor < dadosCarrossel.length) {
            valor++;
            exibirValor(); // Atualiza o valor após a adição
        }
    });
}
exibirValor();
// Funções
function fetchDados() {
    return __awaiter(this, void 0, void 0, function* () {
        let chaveAPIClima = '92c315414138c9802445484218a5012a';
        let latitude = '-14.796580056559943';
        let longitude = '-39.17340386019488';
        let urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${chaveAPIClima}`;
        let urlNoticias = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=3';
        try {
            let dadosJSON = yield fetchAPI(urlNoticias);
            let noticias = pegarNoticias(dadosJSON);
            let containerNoticias = document.getElementsByClassName('container noticias')[0];
            for (const noticia of noticias) {
                const novoContainerComNoticia = document.createElement('div');
                novoContainerComNoticia.innerHTML = `
        <h4>• ${noticia.titulo}</h4>
        <h5>Publicado em: ${noticia.data_publicacao.split(' ')[0]}. Saiba mais em: <a href="${noticia.link}" target="_blank">${noticia.link}</a></h5>
      `;
                containerNoticias.appendChild(novoContainerComNoticia);
            }
        }
        catch (error) {
            console.error('Erro ao consumir a API:', error.message);
        }
        try {
            let dadosJSON = yield fetchAPI(urlClima);
            console.log(dadosJSON);
            $('#climaValor').text(dadosJSON.main.temp);
        }
        catch (error) {
            console.error('Erro ao consumir a API:', error);
        }
    });
}
function fetchAPI(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = url;
        try {
            const response = yield fetch(`${apiUrl}`);
            if (!response.ok) {
                throw new Error(`Erro ao fazer a solicitação. Status: ${response.status}`);
            }
            const json = yield response.json();
            return json;
        }
        catch (error) {
            console.error('Erro ao consumir a API:', error.message);
        }
    });
}
function pegarNoticias(json) {
    let noticias = json['items'].map((item) => {
        const noticia = {
            data_publicacao: item.data_publicacao,
            link: item.link,
            titulo: item.titulo
        };
        return noticia;
    });
    return noticias;
}
function exibirValor() {
    if (numeroImagem && imagem) {
        numeroImagem.textContent = valor.toString();
        imagem.src = dadosCarrossel[valor - 1].link;
        imagem.alt = dadosCarrossel[valor - 1].alt;
    }
}
