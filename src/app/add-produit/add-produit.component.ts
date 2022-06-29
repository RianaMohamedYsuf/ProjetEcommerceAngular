import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';
import { Categorie } from '../models/Categorie.model';
import { CategorieService } from '../service/categorie.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  categories!:Categorie[]

  selectedFile!: File;
  libProduit!: string;
  quantite!:number;
  idCate!: number;


  constructor(private CatService: CategorieService, private ProdService:ProduitService, private router:Router) { }

  selectEvent(event:any):void{
    this.selectedFile = event.target.files[0];
    //console.log()
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
    
    let formData = new FormData();
    formData.append("f", this.selectedFile);
    formData.append("libProduit", this.libProduit);
    formData.append("quantite", this.quantite.toString());
    formData.append("idCate", this.idCate.toString());
    this.ProdService.insererProduit(formData).subscribe(res =>{
      this.router.navigateByUrl('afficherProduits');
    })
  }

}
