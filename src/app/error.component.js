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
var error_service_1 = require("./error.service");
var ErrorComponent = (function () {
    function ErrorComponent(errorService) {
        this.errorService = errorService;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.errorService.errors.subscribe(function (error) {
            _this.errorMessage = error;
        });
    };
    ErrorComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    core_1.Component({
        selector: 'error',
        template: "\n    <h2>Error</h2>\n    <h4> {{ errMessage | async }} </h4>\n  ",
        styleUrls: ['./hero-detail.component.css']
    }),
    __metadata("design:paramtypes", [error_service_1.ErrorService])
], ErrorComponent);
exports.ErrorComponent = ErrorComponent;
//# sourceMappingURL=error.component.js.map