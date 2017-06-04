import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AsyncSubject } from 'rxjs/AsyncSubject';

@Injectable()
export class ErrorService {

  private errorSubject: AsyncSubject<string>;
  errors: Observable<string>;

  constructor() {
    this.errorSubject = new AsyncSubject();
    this.errors = this.errorSubject.asObservable();
  }

  addError(error: string) {
    this.errorSubject.next(error);
    this.errorSubject.complete();
  }
}
