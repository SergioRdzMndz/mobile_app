import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel, IonDatetime, IonGrid, IonRow, IonRouterOutlet, IonSearchbar, IonButtons, IonMenuButton, IonMenu, IonText, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart, home} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSearchbar, IonText, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class HomePage {
  constructor() {
    addIcons({ home, cart });
  }
}
