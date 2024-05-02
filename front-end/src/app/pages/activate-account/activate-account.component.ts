import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {

  constructor(private authService : AuthServiceService){}

  inputValue: string = '';

  sendToken(){
      this.authService.confirm(this.inputValue).subscribe({
      next: () => {
        console.log("donne")
      },
      error: () => {
        console.log("err")
      }
    });
  }
}
