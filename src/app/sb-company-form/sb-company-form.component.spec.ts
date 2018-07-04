import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbCompanyFormComponent } from './sb-company-form.component';

describe('SbCompanyFormComponent', () => {
  let component: SbCompanyFormComponent;
  let fixture: ComponentFixture<SbCompanyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbCompanyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbCompanyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
