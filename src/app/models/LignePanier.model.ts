import { Panier } from "./Panier.model";
import { Produit } from "./Produit.model";

export class LignePanier {

    idLignePanier!:number ;
	panier!: Panier;
	produit!: Produit;
    quantite!: number;

}