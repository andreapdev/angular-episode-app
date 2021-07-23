import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IApiData, IEpisode } from '../shared/interfaces';

@Injectable()
export class DataService {
  baseUrl: string = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {
    this.selection = new BehaviorSubject(this.selectedEpisode);
  }

  getEpisodes(): Observable<IApiData> {
    return this.http
      .get<IApiData>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }
  selectedEpisode: string;
  selection: BehaviorSubject<string>;

  getEpisode(id: number, episodes: IEpisode[]) {
    episodes.forEach(ep => {
      if (ep.id === id) {
        this.selection.next(this.baseUrl + '/' + ep.id);
        return ep;
      }
    });
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'server error');
  }
}
