import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaikhoannvComponent } from './taikhoannv.component';

describe('TaikhoannvComponent', () => {
  let component: TaikhoannvComponent;
  let fixture: ComponentFixture<TaikhoannvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaikhoannvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaikhoannvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
