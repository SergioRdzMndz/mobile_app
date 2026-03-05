import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonSearchbar, IonContent, IonList, IonItem, IonAvatar, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonSearchbar, IonContent, IonList, IonItem, IonAvatar, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent, IonButton],
})
export class CartComponent  implements OnInit {
  items: string[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 11 ; i++) {
      this.items.push(` ${i} $227`);
    }
  }

}
