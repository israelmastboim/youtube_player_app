import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SongsService } from '../../services/songs.service';
import { Song } from '../../entities/song';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit, OnChanges {
  @Output() selectedSong : EventEmitter<Song> = new EventEmitter();
  @Input('searchTerm') searchTerm: string;
  songs: Array<Song>;
  filteredSongs: Array<Song>;
  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
    this.songsService.getSongs().subscribe((songs: Array<Song>) => {
      this.songs = songs;
      this.filteredSongs = songs;
    });
  }

  ngOnChanges(changes: SimpleChanges) {  
    if (this.songs) {
      this.filteredSongs = this.songs.filter((song: Song) => song.title.toLowerCase().includes(changes.searchTerm.currentValue.toLowerCase()) ); 
    }
  }

  selectSond(song: Song): void {
    this.selectedSong.emit(song);
  }


}
