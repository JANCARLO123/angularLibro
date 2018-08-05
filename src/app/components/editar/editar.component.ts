import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import { LibrosService } from '../../libros.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {


  libro: any = {};

  constructor( private route: ActivatedRoute, private librosService: LibrosService,
    private router: Router) {
    }

  updateLibro() {
    console.log(this.libro);
    this.route.params.subscribe(params => {
    this.librosService.updateLibro(this.libro, params['id']);
    this.router.navigate(['inicio']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.librosService.getLibro(params['id']).subscribe(res => {
        console.log(res);
        this.libro = res;
      });
    });
  }

}
