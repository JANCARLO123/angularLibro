import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  uri: String = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) { }

  getLibros() {
  return this
        .http
        .get(`${this.uri}/libros`);
  }

  addLibro(libro) {
    this.http.post(`${this.uri}/libros`, libro)
        .subscribe(res => console.log('Done')
        );
  }

  getLibro(id) {
  return this
        .http
        .get(`${this.uri}/libros/${id}`);
  }

  updateLibro(libro, id) {
    this
      .http
      .put(`${this.uri}/libros/${id}`, libro)
       .subscribe(res => console.log('Done'));
  }

  deleteLibro(id) {
  return this
        .http
        .delete(`${this.uri}/libros/${id}`);
  }


}
