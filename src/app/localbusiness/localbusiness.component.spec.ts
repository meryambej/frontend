import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalbusinessComponent } from './localbusiness.component';

describe('LocalbusinessComponent', () => {
  let component: LocalbusinessComponent;
  let fixture: ComponentFixture<LocalbusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalbusinessComponent]
    });
    fixture = TestBed.createComponent(LocalbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
