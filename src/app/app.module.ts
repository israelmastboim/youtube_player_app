import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CdkScrollableModule } from '@angular/cdk/scrolling';

import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { AppComponent } from './app.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongSearchComponent } from './components/song-search/song-search.component';
import { SongPlayerComponent } from './components/song-player/song-player.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SongQuotesComponent } from './components/song-quotes/song-quotes.component';
import { MinuteSecondsPipe } from './pipes/minute-seconds.pipe';
import { APP_CONFIG, APP_DI_CONFIG } from './config/api.config';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongSearchComponent,
    SongPlayerComponent,
    HeaderComponent,
    SongQuotesComponent,
    MinuteSecondsPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CdkScrollableModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    NgxYoutubePlayerModule
  ],
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
