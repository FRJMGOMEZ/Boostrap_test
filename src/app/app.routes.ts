import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from "./principal/principal.component";

//seccion1
import { ColumnasAlineadasComponent } from './seccion1/columnas-alineadas/columnas-alineadas.component';
import { OffSettingComponent } from './seccion1/off-setting/off-setting.component';
import { ReordenamientoColumnasComponent } from './seccion1/reordenamiento-columnas/reordenamiento-columnas.component';
import { ColumnasAnidadasComponent } from './seccion1/columnas-anidadas/columnas-anidadas.component';

//seccion2
import { Practica1Component } from './practicas/practica1/practica1.component';
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
import { FormulariosComponent } from './seccion4/formularios/formularios.component';
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
  },
  {
    path: "carrousel",
    component: CarrouselComponent
  },
  {
    path: "collapse",
    component: CollapseComponent
  },
  {
    path: "dropdown",
    component: DropdownComponent
  },
  {
    path: "formularios",
    component: FormulariosComponent
  },
  {
    path: "input_group",
    component: InputGroupComponent
  },
  {
    path: "formularios_grid",
    component: FormulariosGridComponent
  },
  {
    path: "checkboxes_radiobuttons",
    component: CheckBoxesRadioButtonsComponent
  },
  {
    path: "formularios_personalizados",
    component: FormulariosPersonalizadosComponent
  },
  {
    path: "cuadros_ayuda",
    component: CuadrosAyudaComponent
  },
  {
    path: "jumbotron",
    component: JumbotronComponent
  },
  {
    path: "list_group",
    component: ListGroupComponent
  },
  {
    path: "modals",
    component: ModalsComponent
  },
  {
    path: "navs",
    component: NavbsComponent
  },
  {
    path: "tabs",
    component: TabsComponent
  },
  {
    path: "navbar",
    component: NavbarsComponent
  },
  {
    path: "pagination",
    component: PaginationComponent
  },
  {
    path: "popovers",
    component: PopoversComponent
  },
  {
    path: "barra_progreso",
    component: BarraProgresoComponent
  },
  {
    path: "scrollpsy",
    component: ScrollpsyComponent
  }
];


export const APPROUTES = RouterModule.forRoot(ROUTES, { useHash: true });


