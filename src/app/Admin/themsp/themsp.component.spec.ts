import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemspComponent } from './themsp.component';

describe('ThemspComponent', () => {
  let component: ThemspComponent;
  let fixture: ComponentFixture<ThemspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
