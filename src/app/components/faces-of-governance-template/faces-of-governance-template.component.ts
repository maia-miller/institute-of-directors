import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faces-of-governance-template',
  templateUrl: './faces-of-governance-template.component.html',
  styleUrls: ['./faces-of-governance-template.component.scss']
})
export class FacesOfGovernanceTemplateComponent implements OnInit {
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
  }

}
