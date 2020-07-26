import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

    // this.retornaObservable().pipe(
    //   retry(1)
    // )
    // .subscribe(
    //     valor => console.log('subs: ', valor),
    //     error => console.warn( 'Error: ', error ),
    //     // tslint:disable-next-line: no-console
    //     () => console.info( 'Obs terminado' )
    // );
    this.intervalSubs = this.retornaInterval()
    .subscribe(
      valor => console.log(valor));

  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaInterval(): Observable<number>{

   return interval(500)
          .pipe(
            map( valor => valor + 1 ),
            filter( valor => ( valor % 2 === 0 ) ? true : false ),
            // take(10),
            );

  }

  retornaObservable(): Observable<number>{

    let i = -1;
    return new Observable<number>( observer => {

      const intervalo = setInterval( () => {
        i++;
        observer.next(i);
        if ( i === 5 ) {
          clearInterval( intervalo );
          observer.complete();
        }
        if ( i === 3 ){
          observer.error('ya llego a el numero esperado');
        }
      }, 1000);
    });

  }


}
