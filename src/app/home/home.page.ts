import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel, IonDatetime, IonGrid, IonRow, IonRouterOutlet, IonSearchbar, IonButtons, IonMenuButton, IonMenu, IonText, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart, home, logOutOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonIcon, IonTabButton, IonTabBar, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSearchbar, IonText, IonLabel],
})
export class HomePage {
  constructor(public router: Router) {
    // Registramos los iconos: home, cart y el de logout
    addIcons({ 
    home, 
    cart, 
    'salir': logOutOutline  // <--- Este es el "apodo" o nombre clave
  });
  }
    logout() {
    console.log('Regresando al Login...');
    this.router.navigate(['/login']);
  }
}
