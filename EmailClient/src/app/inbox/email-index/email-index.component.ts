import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { EmailService, GetEmailsResult } from '../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrl: './email-index.component.css',
})
export class EmailIndexComponent implements OnInit, OnDestroy {
  subManager = new Subscription();

  emails: GetEmailsResult | undefined;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.subManager.add(
      this.emailService.getEmails().subscribe((emails) => {
        this.emails = emails;
      })
    );
  }

  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }
}
