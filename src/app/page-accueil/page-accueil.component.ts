import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css']
})
export class PageAccueilComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  listeCat(){
    this.router.navigateByUrl("afficherCategories")
  }

}
