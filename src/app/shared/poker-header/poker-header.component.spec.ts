import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerHeaderComponent } from './poker-header.component';

describe('PokerHeaderComponent', () => {
  let component: PokerHeaderComponent;
  let fixture: ComponentFixture<PokerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
