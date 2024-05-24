import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,MatCardModule, MatFormFieldModule, FlexLayoutModule, MatIconModule,MatButtonModule,MatInputModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_rfl4ppf', 'template_2lzu81b', e.target as HTMLFormElement, 'yONj_iUijuDbjAxPm')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
