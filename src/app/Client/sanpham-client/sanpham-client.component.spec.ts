import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamClientComponent } from './sanpham-client.component';

describe('SanphamClientComponent', () => {
  let component: SanphamClientComponent;
  let fixture: ComponentFixture<SanphamClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanphamClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanphamClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
