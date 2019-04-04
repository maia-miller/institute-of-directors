import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-council',
  templateUrl: './our-council.component.html',
  styleUrls: ['./our-council.component.scss']
})
export class OurCouncilComponent implements OnInit {
  titledCouncillors = [
    { fullname: 'maia miller',
      role: 'President',
      credentials: 'the best',
      img: 'http://www.placepuppy.net/400/250'
    },
    { fullname: 'maia miller',
      role: 'Vice President',
      credentials: 'the best',
      img: 'http://www.placepuppy.net/400/250'
    }
  ]
  councillors = [
    { fullname: 'fullname',
      role: '',
      credentials: 'credentials',
      img: 'http://www.placepuppy.net/400/250'
    },
    { fullname: 'fullname',
      role: '',
      credentials: 'credentials',
      img: 'http://www.placepuppy.net/400/250'
    },
    { fullname: 'fullname',
      role: '',
      credentials: 'credentials',
      img: 'http://www.placepuppy.net/400/250'
    },
    { fullname: 'fullname',
      role: '',
      credentials: 'credentials',
      img: 'http://www.placepuppy.net/400/250'
    },
    { fullname: 'fullname',
      role: '',
      credentials: 'credentials',
      img: 'http://www.placepuppy.net/400/250'
    },
    { fullname: 'fullname',
      role: '',
      credentials: 'credentials',
      img: 'http://www.placepuppy.net/400/250'
    },
    { fullname: 'fullname',
      role: '',
      credentials: 'credentials',
      img: 'http://www.placepuppy.net/400/250'
    },
    { fullname: 'fullname',
      role: '',
      credentials: 'credentials',
      img: 'http://www.placepuppy.net/400/250'
    },
    { fullname: 'fullname',
      role: '',
      credentials: 'credentials',
      img: 'http://www.placepuppy.net/400/250'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
