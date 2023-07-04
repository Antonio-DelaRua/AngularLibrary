import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcocheComponent } from './crearcoche.component';

describe('CrearcocheComponent', () => {
  let component: CrearcocheComponent;
  let fixture: ComponentFixture<CrearcocheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearcocheComponent]
    });
    fixture = TestBed.createComponent(CrearcocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
