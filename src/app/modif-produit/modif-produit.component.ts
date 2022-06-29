import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { CategorieService } from '../service/categorie.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-modif-produit',
  templateUrl: './modif-produit.component.html',
  styleUrls: ['./modif-produit.component.css']
})
export class ModifProduitComponent implements OnInit {

  categories!:Categorie[]

  selectedFile!: File;
  libProduit!: string;
  quantite!:number;
  idCate!: number;
  idProduit!: number;


  constructor(private CatService: CategorieService, private ProdService:ProduitService, private router:Router,
    private route:ActivatedRoute) { }

  selectEvent(event:any):void{
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.recuperer();
  }

  recuperer(){
    this.CatService.getAll().subscribe(
      response => {this.categories=response;}
    )
  }
  

  SaveProduit():void{
    this.idProduit=+this.route.snapshot.params['id']

    let formData = new FormData();
    formData.append("file", this.selectedFile);
    formData.append("libProduit", this.libProduit);
    formData.append("quantite", this.quantite.toString());
    formData.append("idCate", this.idCate.toString());
    formData.append("idProduit", this.idProduit.toString());
    this.ProdService.modifierProduit(formData).subscribe(res =>{
      this.router.navigateByUrl('afficherProduits');
    })
  }
}
