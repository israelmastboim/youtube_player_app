import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Song } from '../../entities/song';

@Component({
  selector: 'app-song-player',
  templateUrl: './song-player.component.html',
  styleUrls: ['./song-player.component.scss']
})
export class SongPlayerComponent implements OnInit, OnChanges {
  @Input() currentSong: Song;
  player: YT.Player;
  loadingMode: boolean = true;
  constructor() { }

  ngOnInit(): void {
    // this.currentSong = new Song({id: 1, title: 'hello',})
    // this.currentSong.youtubeId = '6hzrDeceEKc';
  }

  ngOnChanges(changes: SimpleChanges) {  
    if(this.currentSong.youtubeId && this.player) {
      this.player.loadVideoById(this.currentSong.youtubeId); 
    }
    
  }

  savePlayer(player: YT.Player): void {
    this.loadingMode = false;
    this.player = player;
    this.player.playVideo();
  }

  playSongInQuoteOffset(offset: number): void {
    this.player.cueVideoById(this.currentSong.youtubeId, offset);
    this.player.playVideo();
  }

}
