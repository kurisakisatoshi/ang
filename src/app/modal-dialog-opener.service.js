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
var Subject_1 = require("rxjs/Subject");
var EMPYT_FUNCTION = function () { };
var ModalDialogOpenerService = (function () {
    function ModalDialogOpenerService() {
        this.subject = new Subject_1.Subject();
        this.opener = this.subject.asObservable();
    }
    // Promise返したい
    ModalDialogOpenerService.prototype.confirm = function (title, body, okText, cancelText, okFunc) {
        if (cancelText === void 0) { cancelText = "キャンセル"; }
        this.subject.next({
            title: title,
            body: body,
            level: Level.INFO,
            okText: okText,
            cancelText: cancelText,
            okFunc: okFunc || EMPYT_FUNCTION,
            cancelFunc: EMPYT_FUNCTION
        });
    };
    ModalDialogOpenerService.prototype.warn = function (title, body, okText, cancelText, okFunc) {
        if (cancelText === void 0) { cancelText = "キャンセル"; }
        this.subject.next({
            title: title,
            body: body,
            level: Level.WARNING,
            okText: okText,
            cancelText: cancelText,
            okFunc: okFunc || EMPYT_FUNCTION,
            cancelFunc: EMPYT_FUNCTION
        });
    };
    ModalDialogOpenerService.prototype.info = function (title, body, cancelText, cancelFunc) {
        this.subject.next({
            title: title,
            body: body,
            level: Level.INFO,
            cancelText: cancelText,
            cancelFunc: cancelFunc
        });
    };
    return ModalDialogOpenerService;
}());
ModalDialogOpenerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ModalDialogOpenerService);
exports.ModalDialogOpenerService = ModalDialogOpenerService;
var Level;
(function (Level) {
    Level[Level["INFO"] = 0] = "INFO";
    Level[Level["WARNING"] = 1] = "WARNING";
    Level[Level["DANGER"] = 2] = "DANGER";
})(Level = exports.Level || (exports.Level = {}));
;
//# sourceMappingURL=modal-dialog-opener.service.js.map