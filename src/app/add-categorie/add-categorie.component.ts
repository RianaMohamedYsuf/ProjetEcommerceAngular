import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  categorie!:Categorie;

  constructor(private CatService : CategorieService,  private route:ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {

    this.categorie = new Categorie();
  }

  SaveCategorie(){
    this.CatService.insererCategorie(this.categorie).subscribe(
      response=>{
        this.router.navigateByUrl('afficherCategories');
      }
    )
  }

}
