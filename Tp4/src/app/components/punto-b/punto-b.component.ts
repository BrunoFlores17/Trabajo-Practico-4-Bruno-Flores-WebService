import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/puntoB/noticia';
import { NoticiaService } from 'src/app/services/puntoB/noticia.service';

@Component({
  selector: 'app-punto-b',
  templateUrl: './punto-b.component.html',
  styleUrls: ['./punto-b.component.css']
})
export class PuntoBComponent implements OnInit {
  categoria: string;
  noticia: Noticia;
  vector_noticias: Array<Noticia>;

  
  constructor(private noticia_servicio: NoticiaService) { 
    this.noticia = new Noticia();
    this.vector_noticias = new Array<Noticia>();

  }

  ngOnInit(): void {
  }

  public cargarNoticias(){
    this.noticia_servicio.listNoticias(this.categoria).subscribe(
      (result) => {
        //es necesario que convierta el JSON que
        this.vector_noticias = new Array<Noticia>();
        result['arts'].forEach(element => {
          this.noticia = new Noticia();
          Object.assign(this.noticia,element);
          this.vector_noticias.push(this.noticia);
        });
        console.log(this.vector_noticias);
      }
    )
    error => { alert("Error en la petición.")};
    
  }
}
