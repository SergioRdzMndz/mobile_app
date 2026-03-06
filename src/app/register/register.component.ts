import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [   IonicModule, FormsModule, CommonModule],
})
export class RegisterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}