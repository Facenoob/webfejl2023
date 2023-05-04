import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzerkesztDiakComponent } from './szerkeszt-diak.component';

describe('SzerkesztDiakComponent', () => {
  let component: SzerkesztDiakComponent;
  let fixture: ComponentFixture<SzerkesztDiakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzerkesztDiakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzerkesztDiakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
