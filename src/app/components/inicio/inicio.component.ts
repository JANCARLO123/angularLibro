import { Component, OnInit } from '@angular/core';
import { Libro } from '../../libro';
import { LibrosService } from '../../libros.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  libros: Libro[] = null;
  constructor(private librosService: LibrosService) { }

  deleteLibro(id) {
    this.librosService.deleteLibro(id).subscribe(res => {
      console.log('Libro Eliminado');
      this.getLibros();
    });
  }

  getLibros() {
    this.librosService.getLibros().subscribe((data: Libro[]) => {
      console.log(data);
      this.libros = data;
    });
  }
  ngOnInit() {
    this.getLibros();
  }

}
