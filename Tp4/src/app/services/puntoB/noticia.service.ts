import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http:HttpClient ) { }

  public listNoticias(categoria:string):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com',
        'X-RapidAPI-Key': '8b8037d196msh7e3fb075a678266p115347jsn994f588b95d3'
      })
    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category=" +categoria, httpOptions);
  }
}
