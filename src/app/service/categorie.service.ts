import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../models/Categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }


  getAll(){
    return this.http.get<Categorie[]>('http://localhost:9090/api/categories');
  }


  getById(id:number){
    return this.http.get<Categorie>('http://localhost:9090/api/categories/'+id);
  }

  deleteCategorie(id:number){
    return this.http.delete('http://localhost:9090/api/categories/'+id);
  }

  modifierCategorie(c:Categorie){
    return this.http.put('http://localhost:9090/api/categories/', c);
  }

  insererCategorie(c:Categorie){
    return this.http.post('http://localhost:9090/api/categories/', c);
  }
}
