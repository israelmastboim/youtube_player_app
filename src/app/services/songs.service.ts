import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../entities/song';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient) { }

  getSongs(): Observable<Array<Song>> {
    return this.http.get<Array<Song>>("https://glacial-escarpment-40412.herokuapp.com/songs");
  }
}
