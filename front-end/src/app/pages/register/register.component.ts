import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,MatCardModule, MatFormFieldModule, FlexLayoutModule, MatIconModule,MatButtonModule,MatInputModule, RouterLink ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  hide = true;
  email: string = '';
  password: string = '';
  firstname: string = '';
  lastname: string = '';

  constructor(private authService: AuthServiceService) {}

  register() {
    this.authService.register(this.firstname, this.lastname, this.email, this.password).subscribe(
      (response : any) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    );
  }
}
