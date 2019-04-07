import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.scss']
})
export class StatBlockComponent implements OnInit {
  @Input() col;
  @Input() statClass;
  @Input() statNumber;
  @Input() statText;
  @Input() statChange;
  @Input() description;

  constructor() { }

  ngOnInit() {
  }

}
