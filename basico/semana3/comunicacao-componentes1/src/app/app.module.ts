import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestePaiComponent } from './teste-pai/teste-pai.component';
import { TesteFilhoComponent } from './teste-filho/teste-filho.component';

@NgModule({
  declarations: [
    AppComponent,
    TestePaiComponent,
    TesteFilhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
