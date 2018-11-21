import { Routes, RouterModule } from '@angular/router';


import { ColumnasAlineadasComponent } from './columnas-alineadas/columnas-alineadas.component';
import { PrincipalComponent } from './principal/principal.component';
import { OffSettingComponent } from './off-setting/off-setting.component';
import { ReordenamientoColumnasComponent } from './reordenamiento-columnas/reordenamiento-columnas.component';
import { ColumnasAnidadasComponent } from './columnas-anidadas/columnas-anidadas.component';
import { Practica1Component } from './practicas/practica1/practica1.component';
import { ResponsiveUtilitiesComponent } from './responsive-utilities/responsive-utilities.component';
import { TipografiaComponent } from './tipografia/tipografia.component';
import { BloquesCodigoComponent } from './bloques-codigo/bloques-codigo.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { TablasComponent } from './tablas/tablas.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { AlertasComponent } from './alertas/alertas.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { MasonryCardsComponent } from './masonry-cards/masonry-cards.component';

const ROUTES: Routes = [
  { path: "", redirectTo: "/principal/1", pathMatch: "full" },
  {
    path: "principal/:pagina",
    component: PrincipalComponent
  },
  {
    path: "columnasAlineadas",
    component: ColumnasAlineadasComponent
  },
  {
    path: "offSetting",
    component: OffSettingComponent
  },
  {
    path: "reordenamientoColumnas",
    component: ReordenamientoColumnasComponent
  },
  {
    path: "columnasAnidadas",
    component: ColumnasAnidadasComponent
  },
  {
    path: "practica1",
    component: Practica1Component
  },
  {
    path: "responsiveUtilities",
    component: ResponsiveUtilitiesComponent
  },
  {
    path: "tipografia",
    component: TipografiaComponent
  },
  {
    path: "bloques_codigo",
    component: BloquesCodigoComponent
  },
  {
    path: "imagenes",
    component: ImagenesComponent
  },
  {
    path: "tablas",
    component: TablasComponent
  },
  {
    path: "media_object",
    component: MediaObjectComponent
  },
  {
    path: "alertas",
    component: AlertasComponent
  },
  {
    path: "badges",
    component: BadgesComponent
  },
  {
    path: "buttons",
    component: ButtonsComponent
  },
  {
    path: "cards",
    component: CardsComponent
  },
  {
    path: "masonry_cards",
    component: MasonryCardsComponent
  }
];

export const APPROUTES = RouterModule.forRoot(ROUTES, { useHash: true });


