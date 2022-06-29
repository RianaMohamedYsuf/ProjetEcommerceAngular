import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LignePanier } from '../models/LignePanier.model';
import { MessageVerif } from '../models/MessageVerif.model';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-modif-panier',
  templateUrl: './modif-panier.component.html',
  styleUrls: ['./modif-panier.component.css']
})
export class ModifPanierComponent implements OnInit {

  lp!: LignePanier

  quantiteApres!:number

  constructor(private route: ActivatedRoute, private PanService: PanierService, private router: Router) { }

  ngOnInit(): void {
    this.lp = new LignePanier();
    this.getLignePanier();
  }


  getLignePanier(){
    const idLignePanier=+this.route.snapshot.params['id'];
    this.PanService.getById(idLignePanier).subscribe(
      response => {
        this.lp=response;}
      )
  }

  SavePanier(){
    let formData = new FormData();
    formData.append("quantiteApres", this.quantiteApres.toString());
    this.PanService.modifierLignePanier(formData, this.lp.idLignePanier).subscribe(
    res=> {console.log(formData);
    this.router.navigateByUrl('afficherPanier');
    }) 
  }
  }


