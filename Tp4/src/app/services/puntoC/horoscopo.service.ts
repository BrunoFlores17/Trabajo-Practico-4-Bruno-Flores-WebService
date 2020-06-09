import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http:HttpClient) { }

  public listaSignos(name:string):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'X-RapidAPI-Host': 'zodiac-sign.p.rapidapi.com',
        'X-RapidAPI-Key': 'ae6f7491c8msha6c15d9d24c5d35p1b8014jsn6ce8745cfbba',
        'useQueryString': 'true'
      }),
      /*params: {
        'sign': name,
        'date': date
      }*/
    };
    return this._http.get("https://zodiac-sign.p.rapidapi.com/signs?sings="+ name, httpOptions);
  }
}
