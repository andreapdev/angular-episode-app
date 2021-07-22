import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html'
})
export class EpisodesListComponent implements OnInit {
  private _episodes: any[] = [];
  @Input() get episodes(): any[] {
    return this._episodes;
  }
  set episodes(value: any[]) {
    if (value) {
      this.receivedEpisodes = this._episodes = value;
    }
  }

  receivedEpisodes: any[] = [];

  constructor() {}

  ngOnInit() {}
}
