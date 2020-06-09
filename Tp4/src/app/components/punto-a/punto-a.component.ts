import { Component, OnInit } from '@angular/core';
import { DivisasService } from 'src/app/services/puntoA/divisas.service';
import { Divisas } from 'src/app/models/puntoA/divisas';

@Component({
  selector: 'app-punto-a',
  templateUrl: './punto-a.component.html',
  styleUrls: ['./punto-a.component.css']
})
export class PuntoAComponent implements OnInit {
  divisas: Divisas;
  vector_divisas: Array<Divisas>;

  constructor(private divisas_servicio: DivisasService) { 
    this.divisas = new Divisas();
  }

  ngOnInit(): void {
  }

  public conversion(){
    this.divisas_servicio.listDivisas(this.divisas.cantidad, this.divisas.desde, this.divisas.a).subscribe(
      (result) => {
        
        this.divisas.resultado = result;
        console.log(this.divisas);
      },
      error => {alert("error en la peticion");}
    )
  }
}
