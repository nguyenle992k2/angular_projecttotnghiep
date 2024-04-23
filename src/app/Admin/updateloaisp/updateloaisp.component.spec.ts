import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateloaispComponent } from './updateloaisp.component';

describe('UpdateloaispComponent', () => {
  let component: UpdateloaispComponent;
  let fixture: ComponentFixture<UpdateloaispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateloaispComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateloaispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
