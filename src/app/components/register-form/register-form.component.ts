import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [MatInputModule,MatCardModule,MatButtonModule ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  constructor(private router:Router){}
  navLogin() : void {
    alert('Register');
    this.router.navigate(['login']);
  }
}
