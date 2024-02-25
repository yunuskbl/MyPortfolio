import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private apiUrl = '';
  constructor(private client: HttpClient) {}

  sendMail(mailData: any): Observable<any> {
    return this.client.post(this.apiUrl, mailData);
  }
}
