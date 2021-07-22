import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IApiData } from '../shared/interfaces';

@Injectable()
export class DataService {
  baseUrl: string = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}

  getEpisodes(): Observable<IApiData> {
    return this.http
      .get<IApiData>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  // getEpisode(id: number): Observable<IEpisode> {
  //   return this.http.get<IEpisode[]>(this.baseUrl).pipe(
  //     map(episodes => {
  //       let episode = episodes.filter((ep: IEpisode) => ep.id === id);
  //       return episode && episode.length ? episode[0] : null;
  //     }),
  //     catchError(this.handleError)
  //   );
  // }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'server error');
  }
}
