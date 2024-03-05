import jquery from "jquery";

const $: JQueryStatic = jquery;

type INoticia =
{
  data_publicacao: string,
  link: string,
  titulo: string,
}

type DadoCarrossel = {
  link: string,
  alt: string
}

// Puxar dados da API
fetchDados();

let dadosCarrossel: DadoCarrossel[] = [
  { link: './assets/foto-campus.webp', alt: "Foto do campus da UESC" },
  { link: "./assets/foto-estudantes.jpg", alt: "Foto de estudantes no campus da UESC" }
];
let valor: number = 1;
let imagem: HTMLImageElement | null = document.querySelector('img');
let numeroImagem: HTMLElement | null = document.querySelector('#numeroImagem');
let botaoSubtrair: HTMLElement | null = document.querySelector('#sub');
let botaoAdicionar: HTMLElement | null = document.querySelector('#add');

if (botaoSubtrair && (valor >= 1 && valor <= dadosCarrossel.length)) {
  botaoSubtrair.addEventListener('click', () => {
    if ( valor > 1 ) {
      valor--;
      exibirValor(); // Atualiza o valor após a subtração
    } 
  });
}

if (botaoAdicionar) {
  botaoAdicionar.addEventListener('click', () => {
    if ( valor < dadosCarrossel.length ) {
      valor++;
      exibirValor(); // Atualiza o valor após a adição
    }
  });
}

exibirValor();


// Funções

async function fetchDados() {
  let chaveAPIClima: string = '92c315414138c9802445484218a5012a';
  let latitude: string = '-14.796580056559943'
  let longitude: string = '-39.17340386019488';
  let urlClima: string = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${chaveAPIClima}`;

  let urlNoticias: string = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=3';
  
  try {
    let dadosJSON: any = await fetchAPI(urlNoticias);
    let noticias = pegarNoticias(dadosJSON);
    let containerNoticias = document.getElementsByClassName('container noticias')[0];

    for (const noticia of noticias) 
    {
      const novoContainerComNoticia = document.createElement('div');

      novoContainerComNoticia.innerHTML = `
        <h4>• ${noticia.titulo}</h4>
        <h5>Publicado em: ${noticia.data_publicacao.split(' ')[0]}. Saiba mais em: <a href="${noticia.link}" target="_blank">${noticia.link}</a></h5>
      `;
      containerNoticias.appendChild(novoContainerComNoticia);
    }
  } catch (error: any) {
    console.error('Erro ao consumir a API:', error.message);
  }

  try {
    let dadosJSON: any = await fetchAPI(urlClima);
    console.log(dadosJSON)

    $('#climaValor').text(dadosJSON.main.temp);


  }
  catch (error: any) {
    console.error('Erro ao consumir a API:', error);
  }
}

async function fetchAPI(url: string): Promise<any>
{
  const apiUrl: string = url;

  try 
  {
    const response = await fetch(`${apiUrl}`);
    
    if (!response.ok) {
      throw new Error(`Erro ao fazer a solicitação. Status: ${response.status}`);
    }

    const json = await response.json();

    return json;
  } 
  catch (error: any) 
  {
    console.error('Erro ao consumir a API:', error.message);
  }
}

function pegarNoticias(json: any): INoticia[]
{
  let noticias: INoticia[] = json['items'].map( (item: any) => {
    const noticia: INoticia = {
      data_publicacao: item.data_publicacao,
      link: item.link,
      titulo: item.titulo
    };

    return noticia;
  })

  return noticias;
}

function exibirValor()
{
  if (numeroImagem && imagem ) {
    numeroImagem.textContent = valor.toString();
    imagem.src = dadosCarrossel[valor - 1].link;
    imagem.alt = dadosCarrossel[valor - 1].alt;
  }
}