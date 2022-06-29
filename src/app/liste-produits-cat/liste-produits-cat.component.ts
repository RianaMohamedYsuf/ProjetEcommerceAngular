import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { Produit } from '../models/Produit.model';
import { CategorieService } from '../service/categorie.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-liste-produits-cat',
  templateUrl: './liste-produits-cat.component.html',
  styleUrls: ['./liste-produits-cat.component.css']
})
export class ListeProduitsCatComponent implements OnInit {

  produits!: Produit[]
  idCategorie!:number
  categorie = new Categorie()

  constructor(private route: ActivatedRoute, private router:Router, private ProdService : ProduitService,
    private CatService:CategorieService) { }

  ngOnInit(): void {
    this.getProduitsCat();
  }

  getProduitsCat(){
    const idCat=+this.route.snapshot.params['id'];
    this.idCategorie=idCat;

    this.ProdService.getbyCat(idCat).subscribe(
      response => {
        this.produits=response});

    this.CatService.getById(idCat).subscribe(
          response => {
            this.categorie=response});
  }

  afficherProduits(){
    this.router.navigateByUrl('afficherProduits');
  }

  afficherCategories(){
    this.router.navigateByUrl('afficherCategories');
  }




}
