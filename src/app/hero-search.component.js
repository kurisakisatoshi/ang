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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
var AsyncSubject_1 = require("rxjs/AsyncSubject");
// Observable class extensions
require("rxjs/add/observable/of");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var hero_search_service_1 = require("./hero-search.service");
require("rxjs/add/operator/toPromise");
var HeroSearchComponent = (function () {
    function HeroSearchComponent(heroSearchService, router) {
        this.heroSearchService = heroSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
        this._subject = new AsyncSubject_1.AsyncSubject();
    }
    // Push a search term into the observable stream.
    HeroSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
        var v = this.s().then(function (n) { return console.log; });
        console.log(v);
    };
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.heroSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    HeroSearchComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    HeroSearchComponent.prototype.t = function () {
        var _this = this;
        this._subject.subscribe(function (name) { return _this.tt = name; });
        this.heroSearchService.search('Narco')
            .subscribe(function (res) {
            setTimeout(function () {
                _this._subject.next(res[0].name);
                _this._subject.complete();
            }, 2000);
        });
    };
    HeroSearchComponent.prototype.s = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.tt) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.ssss()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        console.log("this.tt = " + this.tt);
                        return [2 /*return*/, this.tt];
                }
            });
        });
    };
    HeroSearchComponent.prototype.ssss = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this.heroSearchService.search('Narco')
                                .subscribe(function (res) {
                                var name = res[0].name;
                                setTimeout(function () {
                                    console.log("resolve");
                                    resolve(name);
                                }, 2000);
                            });
                        }).then(function (name) { return _this.tt = name; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HeroSearchComponent.prototype.ss = function (term) {
        var _this = this;
        if (term === void 0) { term = 'Narco'; }
        console.log("ss start");
        return new Promise(function (resolve, reject) {
            _this.heroSearchService.search(term)
                .subscribe(function (res) {
                var name = res[0].name;
                setTimeout(function () {
                    console.log("resolve");
                    resolve(name);
                }, 2000);
            });
        });
    };
    HeroSearchComponent.prototype.sss = function (term) {
        var _this = this;
        if (term === void 0) { term = 'Narco'; }
        // let subject = this._subject;
        var subject = new AsyncSubject_1.AsyncSubject();
        return new Promise(function (resolve, reject) {
            console.log("ss start");
            console.log("ss subject.subscribe 1");
            subject.subscribe(function (name) {
                console.log("ss subject.subscribe ★");
                resolve(name);
                console.log("ss subject.subscribe ★★" + name);
            });
            console.log("ss subject.subscribe 3");
            console.log("ss heroSearchService.search 1");
            _this.heroSearchService.search(term)
                .subscribe(function (res) {
                console.log("ss heroSearchService.search 2" + res[0].name);
                setTimeout(function () {
                    console.log("ss heroSearchService.search 3" + res[0].name);
                    subject.next(res[0].name);
                    console.log("ss heroSearchService.search 4" + res[0].name);
                    console.log("ss subject.complete 1");
                    subject.complete();
                    console.log("ss subject.complete 2");
                }, 2000);
            });
            console.log("ss heroSearchService.search 4");
        });
        // .then(name => {
        //   this.tt = name;
        //   console.log("Promise ★★★" + this.tt);
        // });
        // console.log("ss start");
        // console.log("ss subject.subscribe 1");
        // subject.subscribe(name => {
        //   console.log("ss subject.subscribe ★");
        //   this.tt = name;
        //   console.log("ss subject.subscribe ★★" + this.tt);
        // });
        // console.log("ss subject.subscribe 3");
        // console.log("ss heroSearchService.search 1");
        // this.heroSearchService.search(term)
        //   .subscribe(res => {
        //     console.log("ss heroSearchService.search 2" + res[0].name);
        //     setTimeout(() => {
        //       console.log("ss heroSearchService.search 3" + res[0].name);
        //       subject.next(res[0].name);
        //       console.log("ss heroSearchService.search 4" + res[0].name);
        //       console.log("ss subject.complete 1");
        //       subject.complete();
        //       console.log("ss subject.complete 2");
        //     }, 2000);
        //   });
        // console.log("ss heroSearchService.search 4");
        // console.log("ss this.tt = " + this.tt);
        // return this.tt;
    };
    return HeroSearchComponent;
}());
HeroSearchComponent = __decorate([
    core_1.Component({
        selector: 'hero-search',
        templateUrl: './hero-search.component.html',
        styleUrls: ['./hero-search.component.css'],
        providers: [hero_search_service_1.HeroSearchService]
    }),
    __metadata("design:paramtypes", [hero_search_service_1.HeroSearchService,
        router_1.Router])
], HeroSearchComponent);
exports.HeroSearchComponent = HeroSearchComponent;
//# sourceMappingURL=hero-search.component.js.map