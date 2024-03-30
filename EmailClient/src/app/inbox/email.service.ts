import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OperationResult } from '../shared/models/operation-result';
import { map } from 'rxjs';
import { Email } from './email';

export interface GetEmailsResult {
  messages: {
    id: string;
    subject: string;
    from: string;
  }[];
  total: number;
}

export interface GetEmailResult {
  message: {
    id: string;
    subject: string;
    text: string;
    to: string;
    from: string;
    html: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private baseUrl: string = 'https://localhost:7209';

  constructor(private httpClient: HttpClient) {}

  getEmails() {
    return this.httpClient
      .get<OperationResult<GetEmailsResult>>(`${this.baseUrl}/emails`)
      .pipe(map((value) => value.data));
  }

  getEmail(id: string) {
    return this.httpClient
      .get<OperationResult<GetEmailResult>>(`${this.baseUrl}/emails/${id}`)
      .pipe(map((value) => value.data));
  }

  sendEmail(email: Email) {
    return this.httpClient.post(`${this.baseUrl}/emails`, email);
  }
}
