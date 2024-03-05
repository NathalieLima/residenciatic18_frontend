

"use strict";
import jquery from "jquery";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports = jQuery, "__esModule", { value: true });
require("jquery");
var $ = jQuery;
if (typeof jQuery !== 'undefined') {
    var $_1 = window.jQuery;
    // Agora você pode usar o $ normalmente
}
else {
    console.error('jQuery não está definido no escopo global.');
}
// Puxar dados da API
fetchDados();
var dadosCarrossel = [
    { link: './assets/foto-campus.webp', alt: "Foto do campus da UESC" },
    { link: "./assets/foto-estudantes.jpg", alt: "Foto de estudantes no campus da UESC" }
];
var valor = 1;
var imagem = document.querySelector('img');
var numeroImagem = document.querySelector('#numeroImagem');
var botaoSubtrair = document.querySelector('#sub');
var botaoAdicionar = document.querySelector('#add');
if (botaoSubtrair && (valor >= 1 && valor <= dadosCarrossel.length)) {
    botaoSubtrair.addEventListener('click', function () {
        if (valor > 1) {
            valor--;
            exibirValor(); // Atualiza o valor após a subtração
        }
    });
}
if (botaoAdicionar) {
    botaoAdicionar.addEventListener('click', function () {
        if (valor < dadosCarrossel.length) {
            valor++;
            exibirValor(); // Atualiza o valor após a adição
        }
    });
}
exibirValor();
// Funções
function fetchDados() {
    return __awaiter(this, void 0, void 0, function () {
        var chaveAPIClima, latitude, longitude, urlClima, urlNoticias, dadosJSON, noticias, containerNoticias, _i, noticias_1, noticia, novoContainerComNoticia, error_1, dadosJSON, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chaveAPIClima = '92c315414138c9802445484218a5012a';
                    latitude = '-14.796580056559943';
                    longitude = '-39.17340386019488';
                    urlClima = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(latitude, "&lon=").concat(longitude, "&appid=").concat(chaveAPIClima);
                    urlNoticias = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=3';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetchAPI(urlNoticias)];
                case 2:
                    dadosJSON = _a.sent();
                    noticias = pegarNoticias(dadosJSON);
                    containerNoticias = document.getElementsByClassName('container noticias')[0];
                    for (_i = 0, noticias_1 = noticias; _i < noticias_1.length; _i++) {
                        noticia = noticias_1[_i];
                        novoContainerComNoticia = document.createElement('div');
                        novoContainerComNoticia.innerHTML = "\n        <h4>\u2022 ".concat(noticia.titulo, "</h4>\n        <h5>Publicado em: ").concat(noticia.data_publicacao.split(' ')[0], ". Saiba mais em: <a href=\"").concat(noticia.link, "\" target=\"_blank\">").concat(noticia.link, "</a></h5>\n      ");
                        containerNoticias.appendChild(novoContainerComNoticia);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Erro ao consumir a API:', error_1.message);
                    return [3 /*break*/, 4];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, fetchAPI(urlClima)];
                case 5:
                    dadosJSON = _a.sent();
                    console.log(dadosJSON);
                    $('#climaValor').text(dadosJSON.main.temp);
                    return [3 /*break*/, 7];
                case 6:
                    error_2 = _a.sent();
                    console.error('Erro ao consumir a API:', error_2);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function fetchAPI(url) {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response, json, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = url;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(apiUrl))];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Erro ao fazer a solicita\u00E7\u00E3o. Status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    json = _a.sent();
                    return [2 /*return*/, json];
                case 4:
                    error_3 = _a.sent();
                    console.error('Erro ao consumir a API:', error_3.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function pegarNoticias(json) {
    var noticias = json['items'].map(function (item) {
        var noticia = {
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
