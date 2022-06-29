import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-modif-categorie',
  templateUrl: './modif-categorie.component.html',
  styleUrls: ['./modif-categorie.component.css']
})
export class ModifCategorieComponent implements OnInit {

  categorie!:Categorie;

  constructor(private router: Router, private CatService: CategorieService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.categorie=new Categorie();
    this.getCategorie();
  }

  SaveCategorie(){
    this.CatService.modifierCategorie(this.categorie).subscribe();
    this.router.navigateByUrl('afficherCategories')
  }

  getCategorie(){
    const idCat=+this.route.snapshot.params['id'];
    this.CatService.getById(idCat).subscribe(
      response => {
        this.categorie=response});
  }

}
