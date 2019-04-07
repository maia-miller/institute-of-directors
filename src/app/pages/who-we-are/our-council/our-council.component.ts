import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-council',
  templateUrl: './our-council.component.html',
  styleUrls: ['./our-council.component.scss']
})
export class OurCouncilComponent implements OnInit {
  titledCouncillors = [
    { fullname: 'Liz Coutts',
      role: 'President',
      credentials: 'ONZM, CFInstD',
      img: '/../../../assets/2_Our council/Liz-Coutts.svg'
    },
    { fullname: 'maia miller',
      role: 'Vice President',
      credentials: 'the best',
      img: '/../../../assets/2_Our council/Alan-Isaac.svg'
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
