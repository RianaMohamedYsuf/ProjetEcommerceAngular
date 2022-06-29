import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LignePanier } from '../models/LignePanier.model';
import { MessageVerif } from '../models/MessageVerif.model';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-liste-panier',
  templateUrl: './liste-panier.component.html',
  styleUrls: ['./liste-panier.component.css']
})
export class ListePanierComponent implements OnInit {


  lignesPaniers!:LignePanier[];

  constructor(private PanService: PanierService, private router: Router) { }

  ngOnInit(): void {
    this.recuperer()
  }

  recuperer(){
    this.PanService.getAll().subscribe(
      response => {this.lignesPaniers=response;})
  }

  creerCommande(){

  }

  supprimer(idLignePanier:number){
    this.PanService.deleteLignePanier(idLignePanier).subscribe(
      response=>{this.recuperer();
        this.router.navigateByUrl('afficherPanier');
    })
  }

  modifier(id:number){
    this.router.navigateByUrl('modifierPanier/'+id);
  }

  

}
