import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemkhachhangComponent } from './themkhachhang.component';

describe('ThemkhachhangComponent', () => {
  let component: ThemkhachhangComponent;
  let fixture: ComponentFixture<ThemkhachhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemkhachhangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemkhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
