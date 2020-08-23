import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.scss']
})
export class SongSearchComponent implements OnInit {
  @Output() searchTerm : EventEmitter<string> = new EventEmitter();
  searchSong: FormControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    this.onSearchSong();
  }

  onSearchSong(): void {
    this.searchSong.valueChanges.subscribe((term: string) => {
      console.log(term);
      this.searchTerm.emit(term);
    });
  }

}
