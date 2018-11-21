import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { ColumnasAlineadasComponent } from './columnas-alineadas/columnas-alineadas.component';
import { APPROUTES } from './app.routes';
import { PrincipalComponent } from './principal/principal.component';
import { OffSettingComponent } from './off-setting/off-setting.component';
import { ReordenamientoColumnasComponent } from './reordenamiento-columnas/reordenamiento-columnas.component';
import { ColumnasAnidadasComponent } from './columnas-anidadas/columnas-anidadas.component';
import { Practica1Component } from './practicas/practica1/practica1.component';
import { ResponsiveUtilitiesComponent } from './responsive-utilities/responsive-utilities.component';
import { TipografiaComponent } from './tipografia/tipografia.component';
import { BloquesCodigoComponent } from './bloques-codigo/bloques-codigo.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { RouterModule} from '@angular/router';
import { TablasComponent } from './tablas/tablas.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { AlertasComponent } from './alertas/alertas.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { MasonryCardsComponent } from './masonry-cards/masonry-cards.component';




@NgModule({
  declarations: [
    AppComponent,
    ColumnasAlineadasComponent,
    PrincipalComponent,
    OffSettingComponent,
    ReordenamientoColumnasComponent,
    ColumnasAnidadasComponent,
    Practica1Component,
    ResponsiveUtilitiesComponent,
    TipografiaComponent,
    BloquesCodigoComponent,
    ImagenesComponent,
    TablasComponent,
    MediaObjectComponent,
    AlertasComponent,
    BadgesComponent,
    ButtonsComponent,
    CardsComponent,
    MasonryCardsComponent
  ],
  imports: [BrowserModule, CommonModule, APPROUTES,RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
