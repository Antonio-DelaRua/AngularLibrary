import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfComponent } from './portf.component';

describe('PortfComponent', () => {
  let component: PortfComponent;
  let fixture: ComponentFixture<PortfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfComponent]
    });
    fixture = TestBed.createComponent(PortfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
