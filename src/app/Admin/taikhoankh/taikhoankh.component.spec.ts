import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaikhoankhComponent } from './taikhoankh.component';

describe('TaikhoankhComponent', () => {
  let component: TaikhoankhComponent;
  let fixture: ComponentFixture<TaikhoankhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaikhoankhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaikhoankhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
