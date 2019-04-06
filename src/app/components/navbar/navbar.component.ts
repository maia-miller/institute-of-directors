import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isMenuExpanded: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationStart) {
        this.isMenuExpanded = false;
        console.log('navigation', this.isMenuExpanded)
      }
    })
  }

  ngOnInit() {
  }

  getNavBarClass() {
    let url = window.location.pathname
    let screenSize = screen.width
    let navbarClass = ''

    if (url === '/home') {
      return navbarClass = 'homepageNavBar'
    } else if (url === '/our-branch-network') {
      return navbarClass = 'bluePageNavBar'
    } else if (screenSize > 768) {
      return navbarClass = 'desktopNavBar'
    }
  }

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded
  }

}
