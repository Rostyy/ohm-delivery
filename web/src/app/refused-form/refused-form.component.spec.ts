import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefusedFormComponent } from './refused-form.component';

describe('RefusedFormComponent', () => {
  let component: RefusedFormComponent;
  let fixture: ComponentFixture<RefusedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefusedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefusedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
