import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import * as moment from 'moment'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year : any;

  constructor() { }

  ngOnInit() {
    this.year = moment().year();;
    }

}
