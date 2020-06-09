import { Component, OnInit } from '@angular/core';
import { Covid } from 'src/app/models/puntoD/covid';
import { CovidService } from 'src/app/services/puntoD/covid.service';

@Component({
  selector: 'app-punto-d',
  templateUrl: './punto-d.component.html',
  styleUrls: ['./punto-d.component.css']
})
export class PuntoDComponent implements OnInit {
  pais:string;
  covid: Covid;
  vector_paises: Array<Covid>;

  constructor(private covid_servicio: CovidService) { 
    this.covid=new Covid();
    this.vector_paises= new Array<Covid>();

  }

  ngOnInit(): void {
  }

  public cargarEstadisticas(){
    this.covid_servicio.listaPaises(this.pais).subscribe(
      (result) => {
        //es necesario que convierta el JSON que
        this.vector_paises = new Array<Covid>();
        result.forEach(element => {
          this.covid = new Covid();
          Object.assign(this.covid,element);
          this.vector_paises.push(this.covid);
        });
        console.log(this.vector_paises);
      }
    )
    error => { alert("Error en la petición.")};
  }
}
