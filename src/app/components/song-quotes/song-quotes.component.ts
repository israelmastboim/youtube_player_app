import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../entities/quote';

@Component({
  selector: 'app-song-quotes',
  templateUrl: './song-quotes.component.html',
  styleUrls: ['./song-quotes.component.scss']
})
export class SongQuotesComponent implements OnInit {
  @Input() quote: Quote;
  @Input() quoteIndex: number;
  @Output() quoteOffset : EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.quote);
  }

  emitQuoteOffset(){
    this.quoteOffset.emit(this.quote.offset);
  }

}
