import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private _http: HttpClient) { }

  public listaPaises(pais:string):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'X-RapidAPI-Host': 'covid-19-data.p.rapidapi.com',
        'X-RapidAPI-Key': '8b8037d196msh7e3fb075a678266p115347jsn994f588b95d3',
        'useQueryString': 'true'
      }), 
      /*params:{
        'date': fecha,
        'name': pais
      }*/
    };
    return this._http.get("https://covid-19-data.p.rapidapi.com/country/code?code=" +pais, httpOptions);
  }
}
