import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';



// tslint:disable-next-line: typedef
declare function customInitFunction();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {


  constructor( public settingsService: SettingsService ) { }

  ngOnInit(): void {

    customInitFunction();


  }

}
