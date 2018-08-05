import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from './components/crear/crear.component';
import { EditarComponent } from './components/editar/editar.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [{
  path: 'crear',
  component:CrearComponent

},
{
  path: 'editar/:id',
  component:EditarComponent

},
{
  path: 'index',
  component:InicioComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
