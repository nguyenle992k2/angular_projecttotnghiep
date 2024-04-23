import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemnccComponent } from './themncc.component';

describe('ThemnccComponent', () => {
  let component: ThemnccComponent;
  let fixture: ComponentFixture<ThemnccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemnccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemnccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
