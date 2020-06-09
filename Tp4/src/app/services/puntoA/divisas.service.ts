import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisasService {
  
  constructor(private _http:HttpClient ) { }
  
  public listDivisas(cantidad:string, desde:string, a:string):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
        'X-RapidAPI-Key': '8b8037d196msh7e3fb075a678266p115347jsn994f588b95d3',

	      'useQueryString': "true"

      }),
      params: {     
        /*'from-type': fromtype, 
        'to-type': totype,
        'from-value': fromvalue,*/
        "q": cantidad,
        "from": desde,
        "to": a
        
      }
    };
    return this._http.get("https://currency-exchange.p.rapidapi.com/exchange?exchange=",httpOptions);
  }
}
