import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsloaispComponent } from './dsloaisp.component';

describe('DsloaispComponent', () => {
  let component: DsloaispComponent;
  let fixture: ComponentFixture<DsloaispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsloaispComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsloaispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
