import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router'; // 1. Importamos el Router para navegar

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true, // Asegúrate de que diga standalone si usas imports
  imports: [IonicModule, FormsModule, CommonModule],
})
export class LoginComponent implements OnInit {

  // 2. Definimos las variables que el HTML está buscando
  isAlertOpen = false;

  // Configuración de los botones de la alerta
  public alertButtons = [
    {
      text: 'Entrar',
      role: 'confirm',
      handler: () => {
        // Al presionar "Entrar", navegamos a la página principal
        this.router.navigate(['/home']); 
      },
    },
  ];

  // 3. Inyectamos el Router en el constructor
  constructor(private router: Router) { }

  ngOnInit() {}

  // 4. Función para abrir/cerrar la alerta
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}