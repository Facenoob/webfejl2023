import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeldaDiakCardComponent } from './pelda-diak-card.component';

describe('PeldaDiakCardComponent', () => {
  let component: PeldaDiakCardComponent;
  let fixture: ComponentFixture<PeldaDiakCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeldaDiakCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeldaDiakCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
