import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../entities/song';
import { Observable } from 'rxjs';
import { AppConfig, APP_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient,
              @Inject(APP_CONFIG) private config: AppConfig) { }

  getSongs(): Observable<Array<Song>> {
    return this.http.get<Array<Song>>(this.config.apiEndpoint + '/songs');
  }
}
