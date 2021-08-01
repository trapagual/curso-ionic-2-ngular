import { Injectable } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  /**
   * Consulta el servicio externo proporcionado por http desde la dirección
   * que se incluye y hace un log en la consola. El método devuelve un array
   * de objetos, definidos estos por la estructura JSON que proporciona el servicio.
   * 
   * Esto devuelve un observable
   * Podemos usar los operadores que vienen con rxjs/operators (hay que importarlo)
   * para jugar con los observables. por ejemplo, sacar por consola los componentes
   * internos del observable, con el operador tap
   * 
   * @returns Observable
   */
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      /*
        .pipe(
          tap( posts => {
            console.log( posts );
          })
        );
      */
     /* esto se puede sustituir por esta forma más corta: */
     .pipe( tap ( console.log ) );
  }

}
