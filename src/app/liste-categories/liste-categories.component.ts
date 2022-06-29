import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrls: ['./liste-categories.component.css']
})
export class ListeCategoriesComponent implements OnInit {

  categories!:Categorie[]

  constructor(private CatService: CategorieService, private router:Router) { }

  ngOnInit(): void {

    this.recuperer();
  }


  recuperer(){
    this.CatService.getAll().subscribe(
      response => {this.categories=response;}
    )
  }

  supprimer(idCategorie:number){
    
    this.CatService.deleteCategorie(idCategorie).subscribe(
      response=>{this.recuperer();
                this.router.navigateByUrl('afficherCategories');})
  }

  modifier(id:number){
    this.router.navigateByUrl('modifierCategorie/'+id);
  }

  ajouterCategorie(){
    this.router.navigateByUrl('addCategorie');
  }

  accueil(){
    this.router.navigateByUrl('accueilAdmin');
  }

  afficherProduitCat(idCategorie:number){
    this.router.navigateByUrl('afficherProduitsCat/'+idCategorie);
  }

}
