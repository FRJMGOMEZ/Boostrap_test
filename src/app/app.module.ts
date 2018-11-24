import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { APPROUTES } from './app.routes';

import { PrincipalComponent } from './principal/principal.component';

//sección1
import { ColumnasAlineadasComponent } from "./seccion1/columnas-alineadas/columnas-alineadas.component";
import { OffSettingComponent } from './seccion1/off-setting/off-setting.component';
import { ReordenamientoColumnasComponent } from './seccion1/reordenamiento-columnas/reordenamiento-columnas.component';
import { ColumnasAnidadasComponent } from './seccion1/columnas-anidadas/columnas-anidadas.component';
import { Practica1Component } from './practicas/practica1/practica1.component';

//sección2
import { ResponsiveUtilitiesComponent } from './seccion2/responsive-utilities/responsive-utilities.component';
import { TipografiaComponent } from './seccion2/tipografia/tipografia.component';
import { BloquesCodigoComponent } from './seccion2/bloques-codigo/bloques-codigo.component';
import { ImagenesComponent } from './seccion2/imagenes/imagenes.component';
import { TablasComponent } from './seccion2/tablas/tablas.component';
import { MediaObjectComponent } from './seccion2/media-object/media-object.component';
import { AlertasComponent } from './seccion2/alertas/alertas.component';
import { BadgesComponent } from './seccion2/badges/badges.component';

//sección3
import { ButtonsComponent } from './seccion3/buttons/buttons.component';
import { CardsComponent } from './seccion3/cards/cards.component';
import { MasonryCardsComponent } from './seccion3/masonry-cards/masonry-cards.component';
import { CarrouselComponent } from './seccion3/carrousel/carrousel.component';
import { CollapseComponent } from './seccion3/collapse/collapse.component';
import { DropdownComponent } from './seccion3/dropdown/dropdown.component';

//seccion4
import { FormulariosComponent } from "./seccion4/formularios/formularios.component";
import { InputGroupComponent } from './seccion4/input-group/input-group.component';
import { FormulariosGridComponent } from './seccion4/formularios-grid/formularios-grid.component';
import { CheckBoxesRadioButtonsComponent } from './seccion4/check-boxes-radio-buttons/check-boxes-radio-buttons.component';
import { FormulariosPersonalizadosComponent } from './seccion4/formularios-personalizados/formularios-personalizados.component';
import { CuadrosAyudaComponent } from './seccion4/cuadros-ayuda/cuadros-ayuda.component';

//sección5
import { JumbotronComponent } from './seccion5/jumbotron/jumbotron.component';
import { ListGroupComponent } from './seccion5/list-group/list-group.component';
import { ModalsComponent } from './seccion5/modals/modals.component';
import { NavbsComponent } from './seccion5/navbs/navbs.component';
import { TabsComponent } from './seccion5/tabs/tabs.component';
import { NavbarsComponent } from './seccion5/navbars/navbars.component';
import { PaginationComponent } from './seccion5/pagination/pagination.component';
import { PopoversComponent } from './seccion5/popovers/popovers.component';
import { BarraProgresoComponent } from './seccion5/barra-progreso/barra-progreso.component';
import { ScrollpsyComponent } from './seccion5/scrollpsy/scrollpsy.component';




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
    MasonryCardsComponent,
    CarrouselComponent,
    CollapseComponent,
    DropdownComponent,
    FormulariosComponent,
    InputGroupComponent,
    FormulariosGridComponent,
    CheckBoxesRadioButtonsComponent,
    FormulariosPersonalizadosComponent,
    CuadrosAyudaComponent,
    JumbotronComponent,
    ListGroupComponent,
    ModalsComponent,
    NavbsComponent,
    TabsComponent,
    NavbarsComponent,
    PaginationComponent,
    PopoversComponent,
    BarraProgresoComponent,
    ScrollpsyComponent
  ],
  imports: [BrowserModule, CommonModule, APPROUTES,RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
