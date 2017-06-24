import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

const EMPYT_FUNCTION: Function = () => { };

@Injectable()
export class ModalDialogOpenerService {

  private subject: Subject<OpenEvent>;
  opener: Observable<OpenEvent>;

  constructor() {
    this.subject = new Subject();
    this.opener = this.subject.asObservable();
  }

  // Promise返したい

  confirm(
    title: string,
    body: string,
    okText: string,
    cancelText: string = "キャンセル",
    okFunc?: Function) {

    this.subject.next({
      title: title,
      body: body,
      level: Level.INFO,
      okText: okText,
      cancelText: cancelText,
      okFunc: okFunc || EMPYT_FUNCTION,
      cancelFunc: EMPYT_FUNCTION
    });
  }

  warn(
    title: string,
    body: string,
    okText: string,
    cancelText: string = "キャンセル",
    okFunc?: Function) {

    this.subject.next({
      title: title,
      body: body,
      level: Level.WARNING,
      okText: okText,
      cancelText: cancelText,
      okFunc: okFunc || EMPYT_FUNCTION,
      cancelFunc: EMPYT_FUNCTION
    });
  }

  info(
    title: string,
    body: string,
    cancelText: string,
    cancelFunc?: Function) {

    this.subject.next({
      title: title,
      body: body,
      level: Level.INFO,
      cancelText: cancelText,
      cancelFunc: cancelFunc
    });
  }
}

export enum Level { INFO, WARNING, DANGER };

export interface OpenEvent {
  title: string;
  body: string;
  level: Level;
  okText?: string;
  cancelText: string;
  okFunc?: Function;
  cancelFunc: Function;
}
