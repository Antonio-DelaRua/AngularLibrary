import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikikarComponent } from './wikikar.component';

describe('WikikarComponent', () => {
  let component: WikikarComponent;
  let fixture: ComponentFixture<WikikarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WikikarComponent]
    });
    fixture = TestBed.createComponent(WikikarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
