import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphonsComponent } from './smartphons.component';

describe('SmartphonsComponent', () => {
  let component: SmartphonsComponent;
  let fixture: ComponentFixture<SmartphonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartphonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
