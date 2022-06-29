import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthentifComponent } from './authentif/authentif.component';
import { HttpIntercepBasicAuthService } from './service/http-intercep-basic-auth.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { ModifProduitComponent } from './modif-produit/modif-produit.component';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';
import { ListeProduitsCatComponent } from './liste-produits-cat/liste-produits-cat.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { ListePanierComponent } from './liste-panier/liste-panier.component';
import { ModifPanierComponent } from './modif-panier/modif-panier.component';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    AuthentifComponent,
    FooterComponent,
    HeaderComponent,
    ListeProduitsComponent,
    ListeCategoriesComponent,
    AddProduitComponent,
    AddCategorieComponent,
    ModifProduitComponent,
    ModifCategorieComponent,
    ListeProduitsCatComponent,
    AccueilAdminComponent,
    ListePanierComponent,
    ModifPanierComponent,
    ListeCommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:HttpIntercepBasicAuthService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
