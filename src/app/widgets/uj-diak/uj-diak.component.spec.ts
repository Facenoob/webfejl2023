import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjDiakComponent } from './uj-diak.component';

describe('UjDiakComponent', () => {
  let component: UjDiakComponent;
  let fixture: ComponentFixture<UjDiakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UjDiakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UjDiakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
