import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string;
  public tituloSubs$: Subscription;

  constructor( private router: Router ) {

    this.tituloSubs$ = this.getDataRutas()
    .subscribe( ({titulo}) => {
      this.titulo = titulo;
      document.title = `AdminPro - ${ titulo }`;
    });
  }

  ngOnDestroy(){
    this.tituloSubs$.unsubscribe();
  }

  getDataRutas(){

  return this.router.events
    .pipe(
      filter( evento => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd) => evento.snapshot.data )
    );

  }


}
