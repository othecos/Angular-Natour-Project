import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStoriesComponent } from './section-stories.component';

describe('SectionStoriesComponent', () => {
  let component: SectionStoriesComponent;
  let fixture: ComponentFixture<SectionStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
