import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const AUTH_API = 'https://api.openbrewerydb.org/breweries';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { 

  }

  getBreweries(){
    return this.http.get(AUTH_API);
  }

  GetBrewery(id: Number){
    return this.http.get(AUTH_API+'/'+ id.toString());
  }
}
