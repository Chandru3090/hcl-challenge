import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCitiesWithLatitudeandlogitudeComponent } from './view-cities-with-latitudeandlogitude.component';

describe('ViewCitiesWithLatitudeandlogitudeComponent', () => {
  let component: ViewCitiesWithLatitudeandlogitudeComponent;
  let fixture: ComponentFixture<ViewCitiesWithLatitudeandlogitudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCitiesWithLatitudeandlogitudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCitiesWithLatitudeandlogitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
