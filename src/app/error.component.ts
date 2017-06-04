import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ErrorService } from './error.service';

@Component({
  selector: 'error',
  template: `
    <h2>Error</h2>
    <h4> {{ errMessage | async }} </h4>
  `,
  styleUrls: ['./hero-detail.component.css']
})
export class ErrorComponent implements OnInit, OnDestroy {

  private errorMessage: string;
  private subscription: Subscription;

  constructor(
    private errorService: ErrorService,
  ) { }

  ngOnInit() {
    this.subscription = this.errorService.errors.subscribe(error => {
      this.errorMessage = error;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
