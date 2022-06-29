import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LignePanier } from '../models/LignePanier.model';
import { MessageVerif } from '../models/MessageVerif.model';
import { Panier } from '../models/Panier.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private http:HttpClient) { }


  getAll(){
  
    return this.http.get<LignePanier[]>('http://localhost:9090/api/paniers');
  }

  getById(id:number){
  
    return this.http.get<LignePanier>('http://localhost:9090/api/paniers/'+id);
  }

  ajoutLignePanier(lp:LignePanier, idProduit:number){
    return this.http.post('http://localhost:9090/api/paniers/'+idProduit, lp);
  }

  getAjoutverif(idProduit:number){
  
    return this.http.get<MessageVerif>('http://localhost:9090/api/paniers/ajoutVerif/'+idProduit);
  }

  deleteLignePanier(id:number){
    return this.http.delete('http://localhost:9090/api/paniers/'+id);
  }

  modifierLignePanier(data :FormData, idLignePanier:number){
    return this.http.put('http://localhost:9090/api/paniers/'+idLignePanier, data);
  }

}
