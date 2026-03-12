import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router'; // 1. Importar el Router

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true, // Asegúrate de que tenga esta línea si usas 'imports'
  imports: [IonicModule, FormsModule, CommonModule],
})
export class RegisterComponent implements OnInit {

  // 2. Variable para controlar si la alerta se muestra
  isAlertOpen = false;

  // 3. Configuración del botón de la alerta
  public alertButtons = [
    {
      text: '¡Entendido!',
      role: 'confirm',
      handler: () => {
        // Cuando el usuario cierra la alerta, lo mandamos al home
        this.router.navigate(['/home']);
      },
    },
  ];

  // 4. Inyectar el Router en el constructor
  constructor(private router: Router) { }

  ngOnInit() {}

  // 5. Función para abrir o cerrar la alerta
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}