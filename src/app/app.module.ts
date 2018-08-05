import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CrearComponent } from './components/crear/crear.component';
import { EditarComponent } from './components/editar/editar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LibrosService } from './libros.service';

import { FormsModule } from '@angular/forms';



const routes:Routes = [
  {
    path: 'crear',
    component:CrearComponent

  },
  {
    path: 'editar/:id',
    component:EditarComponent

  },
  {
    path: 'inicio',
    component:InicioComponent

  }
]
@NgModule({
  declarations: [
    AppComponent,
    CrearComponent,
    EditarComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
