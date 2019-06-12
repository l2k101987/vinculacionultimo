import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'nacionalidades', loadChildren: './nacionalidades/nacionalidades.module#NacionalidadesPageModule' },
  { path: 'contaminacion-agua', loadChildren: './contaminacion-agua/contaminacion-agua.module#ContaminacionAguaPageModule' },
  { path: 'contaminacion-aire', loadChildren: './contaminacion-aire/contaminacion-aire.module#ContaminacionAirePageModule' },
  { path: 'contaminacion-suelo', loadChildren: './contaminacion-suelo/contaminacion-suelo.module#ContaminacionSueloPageModule' },
  { path: 'detalle-respuestas', loadChildren: './detalle-respuestas/detalle-respuestas.module#DetalleRespuestasPageModule' },
  { path: 'familias', loadChildren: './familias/familias.module#FamiliasPageModule' },
  { path: 'familiogramas', loadChildren: './familiogramas/familiogramas.module#FamiliogramasPageModule' },
  { path: 'fichas', loadChildren: './fichas/fichas.module#FichasPageModule' },
  { path: 'gps', loadChildren: './gps/gps.module#GpsPageModule' },
  { path: 'grupos-priorizados', loadChildren: './grupos-priorizados/grupos-priorizados.module#GruposPriorizadosPageModule' },
  { path: 'miembros-familia', loadChildren: './miembros-familia/miembros-familia.module#MiembrosFamiliaPageModule' },
  { path: 'preguntas', loadChildren: './preguntas/preguntas.module#PreguntasPageModule' },
  { path: 'rango-edades', loadChildren: './rango-edades/rango-edades.module#RangoEdadesPageModule' },
  { path: 'respuestas', loadChildren: './respuestas/respuestas.module#RespuestasPageModule' },
  { path: 'secciones', loadChildren: './secciones/secciones.module#SeccionesPageModule' },
  { path: 'subsecciones', loadChildren: './subsecciones/subsecciones.module#SubseccionesPageModule' },
  { path: 'detalle-respuesta-ant-familiares', loadChildren: './detalle-respuesta-ant-familiares/detalle-respuesta-ant-familiares.module#DetalleRespuestaAntFamiliaresPageModule' },
  { path: 'embarazos', loadChildren: './embarazos/embarazos.module#EmbarazosPageModule' },
  { path: 'instituciones-sistema', loadChildren: './instituciones-sistema/instituciones-sistema.module#InstitucionesSistemaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
