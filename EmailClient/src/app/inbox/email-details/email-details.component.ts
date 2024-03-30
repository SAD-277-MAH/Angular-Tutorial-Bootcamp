import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { GetEmailResult } from '../email.service';

@Component({
  selector: 'app-email-details',
  templateUrl: './email-details.component.html',
  styleUrl: './email-details.component.css',
})
export class EmailDetailsComponent implements OnDestroy {
  subManager = new Subscription();

  email$: Observable<GetEmailResult>;

  constructor(private route: ActivatedRoute) {
    this.email$ = this.route.data.pipe(
      map((value) => value['email'] as GetEmailResult)
    );

    this.route;
  }

  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }
}
