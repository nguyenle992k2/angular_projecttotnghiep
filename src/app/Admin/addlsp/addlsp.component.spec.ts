import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlspComponent } from './addlsp.component';

describe('AddlspComponent', () => {
  let component: AddlspComponent;
  let fixture: ComponentFixture<AddlspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddlspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
