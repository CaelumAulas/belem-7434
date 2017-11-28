import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FotoComponent } from './foto.component';
import { LegendaComponent } from './legenda.component';


@NgModule({
  declarations: [FotoComponent, LegendaComponent],
  imports: [ BrowserModule],
  exports: [FotoComponent]
})
export class FotoModule {}
