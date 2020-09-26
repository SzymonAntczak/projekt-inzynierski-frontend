import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageView } from './homepage.view';

describe('HomepageView', () => {
  let component: HomepageView;
  let fixture: ComponentFixture<HomepageView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
