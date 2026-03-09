import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonSearchbar, IonContent, IonList, IonItem, IonAvatar, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent, IonButton, IonTabBar, IonTabButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { cart, home} from 'ionicons/icons';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonSearchbar, IonContent, IonList, IonItem, IonAvatar, IonLabel, IonButton, IonTabBar, IonTabButton, IonIcon],
})
export class CartComponent  implements OnInit {
  items: string[] = [];

  constructor() {
    addIcons({ home, cart });
   }

  ngOnInit() {
    for (let i = 1; i < 11 ; i++) {
      this.items.push(` ${i} $227`);
    }
  }

}
