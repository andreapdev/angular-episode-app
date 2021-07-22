import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html'
})
export class EpisodesComponent implements OnInit {
  episodesData: any[];

  constructor() {}

  ngOnInit() {
    this.episodesData = [
      {
        id: 1,
        name: 'Pilot',
        air_date: 'December 1, 2013'
      },
      {
        id: 2,
        name: 'Pilot2',
        air_date: 'December 2, 2013'
      },
      {
        id: 3,
        name: 'Pilot3',
        air_date: 'December 3, 2013'
      },
      {
        id: 4,
        name: 'Pilot4',
        air_date: 'December 4, 2013'
      }
    ];
  }
}
