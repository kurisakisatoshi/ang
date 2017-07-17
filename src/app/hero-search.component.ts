import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AsyncSubject } from 'rxjs/AsyncSubject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  private tt: string;

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
    let v = this.s().then(n => console.log);
    console.log(v);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Hero[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link, { queryParams: { a: 'aa', b: 'bb' } });
  }

  private _subject: AsyncSubject<string> = new AsyncSubject();

  t() {
    this._subject.subscribe(name => this.tt = name);
    this.heroSearchService.search('Narco')
      .subscribe(res => {
        setTimeout(() => {
          this._subject.next(res[0].name);
          this._subject.complete();
        }, 2000);
      });
  }

  async s() {
    if (!this.tt) {
      await this.ssss();
    }
    console.log("this.tt = " + this.tt);
    return this.tt;
  }

  async ssss() {
    await new Promise<string>((resolve: (name: string) => void, reject) => {
      this.heroSearchService.search('Narco')
        .subscribe(res => {
          let name = res[0].name;
          setTimeout(() => {
            console.log("resolve");
            resolve(name);
          }, 2000);
        });
    }).then(name => this.tt = name);
  }


  private ss(term: string = 'Narco'): Promise<string> {
    console.log("ss start");

    return new Promise<string>((resolve, reject) => {
      this.heroSearchService.search(term)
        .subscribe(res => {
          let name = res[0].name;
          setTimeout(() => {
            console.log("resolve");
            resolve(name);
          }, 2000);
        });
    });
  }

  private sss(term: string = 'Narco'): Promise<string> {
    // let subject = this._subject;
    let subject: AsyncSubject<string> = new AsyncSubject();

    return new Promise<string>((resolve, reject) => {

      console.log("ss start");

      console.log("ss subject.subscribe 1");
      subject.subscribe(name => {
        console.log("ss subject.subscribe ★");
        resolve(name);
        console.log("ss subject.subscribe ★★" + name);
      });
      console.log("ss subject.subscribe 3");

      console.log("ss heroSearchService.search 1");
      this.heroSearchService.search(term)
        .subscribe(res => {
          console.log("ss heroSearchService.search 2" + res[0].name);
          setTimeout(() => {

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
  }
}
