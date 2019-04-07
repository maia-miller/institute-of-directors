import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snapshot-of-our-year',
  templateUrl: './snapshot-of-our-year.component.html',
  styleUrls: ['./snapshot-of-our-year.component.scss']
})
export class SnapshotOfOurYearComponent implements OnInit {

  // EDIT THIS CODE TO UPDATE HTML CONTENT //
  thoughtLeadershipStats = [
    {
      col: 'col-md-3',
      blockSize: 'onexone',
      statNumber: 17,
      statText: 'default text here',
      statChange: '(x in 2017)',
      description: 'lorem lorem lorem lorem lorem lorem lorem'
    },
    {
      col: 'col-md-6',
      blockSize: 'twoxone h-100',
      statNumber: 17,
      statText: 'default text here',
      statChange: '(x in 2017)',
      description: 'lorem lorem lorem lorem lorem lorem lorem'
    },
    {
      col: 'col-md-3',
      blockSize: 'onexone',
      statNumber: 17,
      statText: 'default text here',
      statChange: '(x in 2017)',
      description: 'lorem lorem lorem lorem lorem lorem lorem'
    }
  ];

  raisingStandardsStats = [
    {
      col: 'col-md-3',
      blockSize: 'onextwo',
      statNumber: 17,
      statText: 'default text here',
      statChange: '(x in 2017)',
      description: 'raisingStandards raisingStandards raisingStandards raisingStandards raisingStandards raisingStandards raisingStandards'
    },
    {
      col: 'col-md-3',
      blockSize: 'onextwo',
      statNumber: 17,
      statText: 'default text here',
      statChange: '(x in 2017)',
      description: 'raisingStandards raisingStandards raisingStandards raisingStandards raisingStandards raisingStandards raisingStandards'
    },
    {
      col: 'col-md-6',
      blockSize: 'twoxone h-50',
      statNumber: 17,
      statText: 'default text here',
      statChange: '(x in 2017)',
      description: 'lorem lorem lorem lorem lorem lorem lorem'
    }
  ];

  inspireStats = [
    {
      col: 'col-md-6',
      blockSize: 'twoxone',
      statNumber: 17,
      statText: 'default text here',
      statChange: '(x in 2017)',
      description: 'lorem lorem lorem lorem lorem lorem lorem'
    },
    {
      col: 'col-md-6',
      blockSize: 'twoxone',
      statNumber: 17,
      statText: 'default text here',
      statChange: '(x in 2017)',
      description: 'lorem lorem lorem lorem lorem lorem lorem'
    }
  ];

  buildEngagementStatsFirstRow = [
    {
      col: 'col-md-3',
      blockSize: 'onexone',
      statNumber: 17,
      statText: 'default text here',
      statChange: '(x in 2017)',
      description: 'lorem lorem lorem lorem lorem lorem lorem'
    },
    {
      col: 'col-md-3',
      blockSize: 'onexone',
      statNumber: 17,
      statText: 'default text here',
      statChange: '(x in 2017)',
      description: 'lorem lorem lorem lorem lorem lorem lorem'
    },
    {
      col: 'col-md-6 h-80',
      blockSize: 'twoxone',
      statNumber: 17,
      statText: 'default text here',
      statChange: '(x in 2017)',
      description: 'lorem lorem lorem lorem lorem lorem lorem'
    }
  ]
    buildEngagementStatsSecondRow = [
    {
      col: 'col-md-3',
      blockSize: 'onexone',
      statNumber: 17,
      statText: 'default text here',
      statChange: '(x in 2017)',
      description: 'lorem lorem lorem lorem lorem lorem lorem'
    },
    {
      col: 'col-md-3',
      blockSize: 'onexone',
      statNumber: 17,
      statText: 'default text here',
      statChange: '(x in 2017)',
      description: 'lorem lorem lorem lorem lorem lorem lorem'
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log('stat', this.thoughtLeadershipStats)
  }

}
