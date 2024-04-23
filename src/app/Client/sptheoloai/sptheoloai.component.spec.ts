import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SptheoloaiComponent } from './sptheoloai.component';

describe('SptheoloaiComponent', () => {
  let component: SptheoloaiComponent;
  let fixture: ComponentFixture<SptheoloaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SptheoloaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SptheoloaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
