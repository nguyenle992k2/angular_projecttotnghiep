import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhohangComponent } from './khohang.component';

describe('KhohangComponent', () => {
  let component: KhohangComponent;
  let fixture: ComponentFixture<KhohangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhohangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhohangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
