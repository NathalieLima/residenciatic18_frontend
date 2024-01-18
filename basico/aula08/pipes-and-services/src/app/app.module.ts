import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeTransformPipe } from './pipe-transform.pipe';
import { DadosPaisesComponent } from './dados-paises/dados-paises.component';
import { AcessoApiService } from './services/acesso-api.service';

@NgModule({
  declarations: [
    AppComponent,
    PipeTransformPipe,
    DadosPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AcessoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
