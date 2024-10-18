import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNotesComponent } from './main-notes.component';

describe('MainNotesComponent', () => {
  let component: MainNotesComponent;
  let fixture: ComponentFixture<MainNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainNotesComponent]
    });
    fixture = TestBed.createComponent(MainNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
