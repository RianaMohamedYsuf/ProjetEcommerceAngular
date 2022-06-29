import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }


  authentification(username:string,password:string)
  {
   
    /*let basicchaine='Basic '+window.btoa(username+':'+password);

    let headers = new HttpHeaders({
      Authorization: basicchaine
    })*/

    return this.http.post<any>('http://localhost:9090/authenticate',
    {username,password});

  }

  logout(){
    
    sessionStorage.removeItem('t')
  }

}

