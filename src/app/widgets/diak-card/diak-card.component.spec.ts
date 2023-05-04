import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiakCardComponent } from './diak-card.component';

describe('DiakCardComponent', () => {
  let component: DiakCardComponent;
  let fixture: ComponentFixture<DiakCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiakCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiakCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
