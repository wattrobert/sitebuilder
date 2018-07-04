import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbHtmlInputComponent } from './sb-html-input.component';

describe('SbHtmlInputComponent', () => {
  let component: SbHtmlInputComponent;
  let fixture: ComponentFixture<SbHtmlInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbHtmlInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbHtmlInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
