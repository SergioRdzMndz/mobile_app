import { Component, OnInit } from '@angular/core';
import { IonCardContent, IonCol, IonCard, IonCardHeader, IonCardTitle, IonGrid, IonRow, IonContent, IonTitle, IonToolbar, IonHeader, IonSearchbar, IonText, IonCardSubtitle } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  imports: [ IonCard,CommonModule, IonContent, IonTitle, IonToolbar, IonHeader, IonSearchbar, IonText],
})


export class CategoryComponent  implements OnInit {
categoryName: any;

expandedIndex : number | null = null;


toggleDescription(index: number) {
  this.expandedIndex = this.expandedIndex === index ? null : index;
}
games = [
  {name : "Halo Infinite", description : "Halo Infinite es un videojuego de disparos en primera persona desarrollado por 343 Industries donde el jugador combate en un mundo abierto enfrentando enemigos alienígenas.", price: 1400, img : "https://wpassets.halowaypoint.com/wp-content/2021/12/HaloInfinite_CampaignKeyArt_CLEAN_1920x1080.jpg"},
   {name : "Left 4 Dead 2", description : "Ambientado en el apocalipsis zombie, Left 4 Dead 2 es un FPS de acción y terror cooperativo que te lleva a ti y a tus amigos a través de las ciudades, pantanos y cementerios del sur profundo, desde Savannah hasta Nueva Orleans a lo largo de cinco campañas expansivas.", price: 123.99, img : "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/550/header.jpg?t=1772742214"},
    {name : "Call of Duty®: Modern Warfare® II", description : "Call of Duty®: Modern Warfare® II lanza a los jugadores en un conflicto global sin precedentes que incluye el regreso de los icónicos Operadores de la Fuerza Operativa 141.", price: 1399, img : "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3595230/ce4d5e53b36cb9d3c4309d1df72bf8663bbbc7ef/header.jpg?t=1764711899"}
]

  constructor() { }

  ngOnInit() {}

}
