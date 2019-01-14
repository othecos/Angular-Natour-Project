import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesCardsComponent } from './features-cards.component';

describe('FeaturesCardsComponent', () => {
  let component: FeaturesCardsComponent;
  let fixture: ComponentFixture<FeaturesCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
