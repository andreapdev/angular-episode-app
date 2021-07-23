import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { IEpisode, IApiData } from '../shared/interfaces';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html'
})
export class EpisodesComponent implements OnInit {
  onScroll() {
    console.log('scrolled!!');
    this.dataService
      .getMoreEpisodes()
      .subscribe(
        (episodes: IApiData) =>
          (this.episodesData = this.episodesData.concat(episodes.results))
      );
  }
  episodesData: IEpisode[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getEpisodes()
      .subscribe(
        (episodes: IApiData) => (this.episodesData = episodes.results)
      );
  }
}
