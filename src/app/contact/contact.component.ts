import { Component } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: 'contact.component.css',
})
export class ContactComponent {
  name: string | any;
  mail: string | any;
  phone: string | any;
  subject: string | any;
  body: string | any;
  constructor() {}
  sendMail() {}
}
