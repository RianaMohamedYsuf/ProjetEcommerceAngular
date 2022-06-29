import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { AuthentifComponent } from './authentif/authentif.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { ListePanierComponent } from './liste-panier/liste-panier.component';
import { ListeProduitsCatComponent } from './liste-produits-cat/liste-produits-cat.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';
import { ModifPanierComponent } from './modif-panier/modif-panier.component';
import { ModifProduitComponent } from './modif-produit/modif-produit.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';


const routes: Routes = [
  {path:'',component:PageAccueilComponent},
  {path:'login',component:AuthentifComponent},
  {path:'afficherProduits',component:ListeProduitsComponent},
  {path:'afficherCategories',component:ListeCategoriesComponent},
  {path:'modifierProduit/:id',component:ModifProduitComponent},
  {path:'modifierCategorie/:id',component:ModifCategorieComponent},
  {path:'addCategorie',component:AddCategorieComponent},
  {path:'addProduit',component:AddProduitComponent},
  {path:'afficherProduitsCat/:id',component:ListeProduitsCatComponent},
  {path:'accueilAdmin',component:AccueilAdminComponent},
  {path:'afficherPanier',component:ListePanierComponent},
  {path:'modifierPanier/:id',component:ModifPanierComponent},
  
  
  
  
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
