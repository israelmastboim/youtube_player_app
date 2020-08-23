import { Component } from '@angular/core';
import { Song } from './entities/song';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deep-innovation-test';
  selectedSong: Song;
  searchTerm: string;

  onselectSong(song: Song) {
    this.selectedSong = song;
  }

  onSearch(term: string) {
    this.searchTerm = term;
  }
}
