import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../models/Produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  getAll(){
  
    return this.http.get<Produit[]>('http://localhost:9090/api/produits');
  }


  getById(id:number){
    return this.http.get<Produit>('http://localhost:9090/api/produits/'+id);
  }

  deleteProduit(id:number){
    return this.http.delete('http://localhost:9090/api/produits/'+id);
  }

  modifierProduit(data : FormData){
    return this.http.put('http://localhost:9090/api/produits', data);
  }

  insererProduit(data : FormData){
    return this.http.post('http://localhost:9090/api/produits/upload', data);
  }

  getbyCat(idCat : number){
  
    return this.http.get<Produit[]>('http://localhost:9090/api/produitsCat/'+idCat);
  }

}
