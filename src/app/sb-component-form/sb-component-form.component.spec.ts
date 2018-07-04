import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbComponentFormComponent } from './sb-component-form.component';

describe('SbComponentFormComponent', () => {
  let component: SbComponentFormComponent;
  let fixture: ComponentFixture<SbComponentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbComponentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbComponentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
