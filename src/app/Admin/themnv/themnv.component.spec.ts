import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemnvComponent } from './themnv.component';

describe('ThemnvComponent', () => {
  let component: ThemnvComponent;
  let fixture: ComponentFixture<ThemnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemnvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
