import { Component } from '@angular/core';
import { AcessoApiService, Country } from '../services/acesso-api.service';

@Component({
  selector: 'app-dados-paises',
  templateUrl: './dados-paises.component.html',
  styleUrl: './dados-paises.component.css'
})

export class DadosPaisesComponent {
  countries: Country[] = [];

  constructor(private countriesService: AcessoApiService) {
    countriesService.carregarDados().then( res => {
      this.countries = res;
    } )
   }

   getPopulationTotal(): number {
      return this.countries.map(item => item.population).reduce(
        (accumulator, currentValue) => accumulator + currentValue);
   }

   getCountCountries(): number {
    return this.countries.length;
   }
}
