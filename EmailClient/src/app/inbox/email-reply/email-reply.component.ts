import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Email } from '../email';
import { AuthService } from '../../auth/auth.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrl: './email-reply.component.css',
})
export class EmailReplyComponent implements OnChanges {
  @Input() email: Email = {
    id: '',
    subject: '',
    text: '',
    to: '',
    from: '',
    html: '',
  };

  showModal: Boolean = false;

  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.email = {
      ...this.email,
      to: this.email.from,
      from: `${this.authService.username}@mrmahdian.ir`,
      subject: `Re: ${this.email.subject}`,
      text: `\n\n\n---------- <${
        this.email.from
      }> wrote:\n\n> ${this.email.text.replace(/\n/gi, '\n> ')}`,
    };
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
