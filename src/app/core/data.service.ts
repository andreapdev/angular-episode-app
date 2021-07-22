import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IApiData, IEpisode } from '../shared/interfaces';

@Injectable()
export class DataService {
  baseUrl: string = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}

  getEpisodes(): Observable<IApiData> {
    return this.http
      .get<IApiData>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  getEpisode(id: number): Observable<IEpisode> {
    let selectedEpisode = this.http
      .get<IEpisode>(this.baseUrl + '/' + id)
      .pipe(catchError(this.handleError));
    console.log('clicked' + id);
    return selectedEpisode;
  }

  selectedEpisode: string;

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'server error');
  }
}
