import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelvetelComponentComponent } from './felvetel-component.component';

describe('FelvetelComponentComponent', () => {
  let component: FelvetelComponentComponent;
  let fixture: ComponentFixture<FelvetelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FelvetelComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FelvetelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
