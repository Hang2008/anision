import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseloanComponent } from './houseloan.component';

describe('HouseloanComponent', () => {
  let component: HouseloanComponent;
  let fixture: ComponentFixture<HouseloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
