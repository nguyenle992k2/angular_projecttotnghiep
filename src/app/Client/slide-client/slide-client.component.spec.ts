import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideClientComponent } from './slide-client.component';

describe('SlideClientComponent', () => {
  let component: SlideClientComponent;
  let fixture: ComponentFixture<SlideClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
