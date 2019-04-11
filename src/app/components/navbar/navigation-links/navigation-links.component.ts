import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.scss']
})
export class NavigationLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isTabDark() {
    return window.location.pathname === '/home' ? 'darkTab' : 'lightTab'
  }

}
