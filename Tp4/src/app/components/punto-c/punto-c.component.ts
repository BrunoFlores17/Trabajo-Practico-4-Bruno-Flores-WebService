import { Component, OnInit } from '@angular/core';
import { Horoscopo } from 'src/app/models/puntoC/horoscopo';
import { HoroscopoService } from 'src/app/services/puntoC/horoscopo.service';

@Component({
  selector: 'app-punto-c',
  templateUrl: './punto-c.component.html',
  styleUrls: ['./punto-c.component.css']
})
export class PuntoCComponent implements OnInit {
  horoscopo: Horoscopo;
  vector_signos: Array<Horoscopo>;


  constructor(private horoscopo_servicio: HoroscopoService) {
    this.horoscopo = new Horoscopo();
    this.vector_signos = new Array<Horoscopo>();
   }

  ngOnInit(): void {
  }

  public mostrarSigno(){
    this.horoscopo_servicio.listaSignos(this.horoscopo.name).subscribe(
      (result) => {
        //es necesario que convierta el JSON que
        this.vector_signos = new Array<Horoscopo>();
        result.forEach(element => {
          this.horoscopo = new Horoscopo();
          Object.assign(this.horoscopo,element);
          this.vector_signos.push(this.horoscopo);
        });
        console.log(this.vector_signos);
      }
    )
    error => { alert("Error en la petición.")};
  }
}
