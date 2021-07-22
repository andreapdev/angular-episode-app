export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: any[];
  url: string;
  created?: string;
}

export interface IApiData {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: IEpisode[];
}
