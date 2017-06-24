import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ModalDialogOpenerService, Level } from './modal-dialog-opener.service';

declare let $: any;

@Component({
  selector: 'app-modal-dialog',
  template: `
    <div id="modalDialog" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">
              <i *ngIf="level !== Level.INFO" class="material-icons">error</i>
              <span class="title">{{title}}</span>
            </h4>
          </div>
          <div class="modal-body">
            <div *ngIf="level === Level.WARNING" class="alert alert-warning" role="alert">
              <i class="material-icons">warning</i>
              <p><span class="body" [innerHTML]="body"></span></p>
            </div>
            <div *ngIf="level === Level.DANGER" class="alert alert-danger" role="alert">
              <i class="material-icons">error</i>
              <p><span class="body" [innerHTML]="body"></span></p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-raised btn-default" data-dismiss="modal">
              <span>{{cancelText}}</span>
            </button>
            <button *ngIf="okText && okFunc" type="button"
                    class="btn btn-raise"
                    (click)="emitOkFunc">
              <span>{{okText}}</span>
            </button>
          </div>
        </div>
      </div>
    </div>`
})
export class ModalDialogComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  readonly Level = Level;

  @Input() level: Level;
  @Input() title: string;
  @Input() body: string;
  @Input() cancelText: string;
  @Input() okText: string;
  @Input() posButtonStyle: string;

  private okFunc: Function;

  constructor(
    private dialogOpenerService: ModalDialogOpenerService,
  ) {
  }

  ngOnInit() {
    this.subscription = this.dialogOpenerService.opener.subscribe(e => {

      this.level = e.level;
      this.title = e.title;
      this.body = e.body;
      this.cancelText = e.cancelText;
      this.okText = e.okText;

      this.okFunc = e.okFunc;

      $('#modalDialog').on('hidden.bs.modal', e.cancelFunc);
      $('#modalDialog').modal('show');
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  emitokFunc() {
    $('#modalDialog').modal('hide');
    this.okFunc();
  }
}
