import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllStudentsComponent } from './find-all-students.component';

describe('FindAllStudentsComponent', () => {
  let component: FindAllStudentsComponent;
  let fixture: ComponentFixture<FindAllStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAllStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
