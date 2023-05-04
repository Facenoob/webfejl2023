import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiakokComponenetComponent } from './diakok-componenet.component';

describe('DiakokComponenetComponent', () => {
  let component: DiakokComponenetComponent;
  let fixture: ComponentFixture<DiakokComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiakokComponenetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiakokComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
