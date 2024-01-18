import fetch from 'node-fetch';

async function fetchAPI() {
  const api_key: string = '808fa26b53624c4dad9a05ce3beca7a3'; // Substitua com sua chave de API
  const apiUrl: string = 'https://newsapi.org/v2/everything?q=tesla&from=2023-11-19&sortBy=publishedAt';

  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${api_key}` },
  };

  try {
    const response = await fetch(`${apiUrl}&apiKey=${api_key}`, options);
    if (!response.ok) {
      throw new Error(`Erro ao fazer a solicitação. Status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error: any) {
    console.error('Erro ao consumir a API:', error.message);
  }
}

fetchAPI();