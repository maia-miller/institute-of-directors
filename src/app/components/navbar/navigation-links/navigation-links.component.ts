import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.scss']
})
export class NavigationLinksComponent implements OnInit {
  doesWhoMenuShow: boolean = false;
  doesYearMenuShow: boolean = false;
  doesFacesMenuShow: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  isTabDark() {
    return window.location.pathname === '/home' ? 'darkTab' : 'lightTab'
  }

  toggleWhoMenu() {
    this.doesWhoMenuShow = !this.doesWhoMenuShow
  }

  toggleYearMenu() {
    this.doesYearMenuShow = !this.doesYearMenuShow
  }

  toggleFacesMenu() {
    this.doesFacesMenuShow = !this.doesFacesMenuShow
  }
}
