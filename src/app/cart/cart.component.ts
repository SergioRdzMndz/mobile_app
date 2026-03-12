import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonSearchbar, IonContent, 
  IonList, IonItem, IonAvatar, IonLabel, IonButton, 
  IonTabBar, IonTabButton, IonIcon, 
  IonAlert // 1. Importar IonAlert
} from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { cart, home, logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonTitle, IonSearchbar, 
    IonContent, IonList, IonItem, IonAvatar, IonLabel, 
    IonButton, IonTabBar, IonTabButton, IonIcon,
    IonAlert // 2. Añadir a los imports
  ],
})
export class CartComponent implements OnInit {
  items: string[] = [];
  
  // 3. Variable para controlar el Alert de pago
  isPayAlertOpen = false;
  payButtons = ['OK'];

  constructor(public router: Router) {
    addIcons({ 
      home, 
      cart, 
      'salir': logOutOutline 
    });
  }

  ngOnInit() {
    for (let i = 1; i < 11; i++) {
      this.items.push(`Producto ${i} - $227`);
    }
  }

  // 4. Función para abrir el mensaje de pago
  confirmarPago() {
    this.isPayAlertOpen = true;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}