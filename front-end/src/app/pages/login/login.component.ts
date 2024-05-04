import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,MatCardModule, MatFormFieldModule, FlexLayoutModule, MatIconModule,MatButtonModule,MatInputModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide = true;
  email: string = '';
  password: string = '';

  constructor(private authService: AuthServiceService) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response : any) => {
        console.log(response)
        localStorage.setItem("token", response.token)
      },
      (error) => {
        console.log(error)
      }
    );
  }

}
