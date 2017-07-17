"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_opener_service_1 = require("./modal-dialog-opener.service");
var ModalDialogComponent = (function () {
    function ModalDialogComponent(dialogOpenerService) {
        this.dialogOpenerService = dialogOpenerService;
        this.Level = modal_dialog_opener_service_1.Level;
    }
    ModalDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dialogOpenerService.opener.subscribe(function (e) {
            _this.level = e.level;
            _this.title = e.title;
            _this.body = e.body;
            _this.cancelText = e.cancelText;
            _this.okText = e.okText;
            _this.okFunc = e.okFunc;
            $('#modalDialog').on('hidden.bs.modal', e.cancelFunc);
            $('#modalDialog').modal('show');
        });
    };
    ModalDialogComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ModalDialogComponent.prototype.emitokFunc = function () {
        $('#modalDialog').modal('hide');
        this.okFunc();
    };
    return ModalDialogComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ModalDialogComponent.prototype, "level", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalDialogComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalDialogComponent.prototype, "body", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalDialogComponent.prototype, "cancelText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalDialogComponent.prototype, "okText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalDialogComponent.prototype, "posButtonStyle", void 0);
ModalDialogComponent = __decorate([
    core_1.Component({
        selector: 'app-modal-dialog',
        template: "\n    <div id=\"modalDialog\" class=\"modal\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">\n              <i *ngIf=\"level !== Level.INFO\" class=\"material-icons\">error</i>\n              <span class=\"title\">{{title}}</span>\n            </h4>\n          </div>\n          <div class=\"modal-body\">\n            <div *ngIf=\"level === Level.WARNING\" class=\"alert alert-warning\" role=\"alert\">\n              <i class=\"material-icons\">warning</i>\n              <p><span class=\"body\" [innerHTML]=\"body\"></span></p>\n            </div>\n            <div *ngIf=\"level === Level.DANGER\" class=\"alert alert-danger\" role=\"alert\">\n              <i class=\"material-icons\">error</i>\n              <p><span class=\"body\" [innerHTML]=\"body\"></span></p>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-raised btn-default\" data-dismiss=\"modal\">\n              <span>{{cancelText}}</span>\n            </button>\n            <button *ngIf=\"okText && okFunc\" type=\"button\"\n                    class=\"btn btn-raise\"\n                    (click)=\"emitOkFunc\">\n              <span>{{okText}}</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>"
    }),
    __metadata("design:paramtypes", [modal_dialog_opener_service_1.ModalDialogOpenerService])
], ModalDialogComponent);
exports.ModalDialogComponent = ModalDialogComponent;
//# sourceMappingURL=modal-dialog.component.js.map