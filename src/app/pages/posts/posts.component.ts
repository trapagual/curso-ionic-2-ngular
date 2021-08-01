import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;


  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.mensajes = this.dataService.getPosts();

    /* OJO OJO: esto de abajo NO FUNCIONA, porque posts es un array de objetos
                y no se puede convertir en un array de any[]
                asignandolo a la variable, SI FUNCIONA
                
      .subscribe( posts  => {
        console.log(posts);
        this.mensajes=posts;
      });
    */
  }

  escuchaClick( id: number ) {
    console.log('Click en: ', id);
  }

}
