import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spotlight-template',
  templateUrl: './spotlight-template.component.html',
  styleUrls: ['./spotlight-template.component.scss']
})
export class SpotlightTemplateComponent implements OnInit {
  @Input() fullname: string;
  @Input() firstname: string;
  @Input() middlename: string;
  @Input() lastname: string;
  @Input() quote: string;
  @Input() paraone: string;
  @Input() paratwo: string;
  @Input() parathree: string;
  @Input() parafour: string;
  @Input() parafive: string;


  constructor() { }

  ngOnInit() {
    console.log('This is the value for firstname: ' + this.firstname);

  }

}
