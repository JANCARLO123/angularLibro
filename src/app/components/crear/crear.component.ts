import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LibrosService } from '../../libros.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  libro: any = {};

  constructor(private route: ActivatedRoute, private librosService: LibrosService,
    private router: Router) { }

    insertLibro() {
      console.log(this.libro);
       this.librosService.addLibro(this.libro);
        this.router.navigate(['inicio']);
    }


  ngOnInit() {
  }

}
