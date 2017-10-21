import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KommuneFormComponent } from './kommune-form.component';

describe('KommuneFormComponent', () => {
  let component: KommuneFormComponent;
  let fixture: ComponentFixture<KommuneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KommuneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KommuneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
