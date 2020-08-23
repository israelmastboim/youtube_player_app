import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongQuotesComponent } from './song-quotes.component';

describe('SongQuotesComponent', () => {
  let component: SongQuotesComponent;
  let fixture: ComponentFixture<SongQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
