import { Injectable } from '@angular/core';

export interface Country
{
  name: string,
  population: number,
}

@Injectable({
  providedIn: 'root'
})

export class AcessoApiService
{
  public async carregarDados(): Promise<Country[]>
  {
      const response = await fetch("https://restcountries.com/v3.1/independent?status=true");
      const dados = await response.json();
      let teste: Country[] = [];

      for (let i = 0; i < dados.length; i++)
      {
        const country = {
          name: dados[i]['name']['official'],
          population: dados[i]['population']
        }

        teste.push(country);
      }

      return teste;
  }
}
