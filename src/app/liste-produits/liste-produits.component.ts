import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LignePanier } from '../models/LignePanier.model';
import { MessageVerif } from '../models/MessageVerif.model';
import { Produit } from '../models/Produit.model';
import { PanierService } from '../service/panier.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  produits!:Produit[];
  verifAjoutMsg!: MessageVerif
  msgErreur = false
  lp !: LignePanier

  constructor(private ProdService:ProduitService, private router:Router, private PanService: PanierService) { }

  ngOnInit(): void {
    this.msgErreur = false;
    this.lp=new LignePanier();
    this.recuperer();
  }


  recuperer(){
    this.ProdService.getAll().subscribe(
      response => {this.produits=response;}
    )
  }

  supprimer(id:number){
    
    this.ProdService.deleteProduit(id).subscribe(
      response=>{this.recuperer();
                this.router.navigateByUrl('afficherProduits');})
  }

  modifier(id:number){
    this.router.navigateByUrl('modifierProduit/'+id);
  }

  ajouterProduit(){
    this.router.navigateByUrl('addProduit');
  }

  accueil(){
    this.router.navigateByUrl('accueilAdmin');
  }

  verifAjout(idProduit: number){
    this.PanService.getAjoutverif(idProduit).subscribe(
      response=>{this.verifAjoutMsg=response;
        console.log(this.verifAjoutMsg);
    
      if (this.verifAjoutMsg.message == "AjoutOk"){
      this.PanService.ajoutLignePanier(this.lp, idProduit).subscribe();
      console.log(this.lp);
      this.router.navigateByUrl('afficherPanier');
      }

      else{
      this.msgErreur=true;
      console.log(this.msgErreur)
      this.router.navigateByUrl('afficherProduits');
      };}
    )

  }

}
