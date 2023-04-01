import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAllStudentsComponent } from './search-all-students.component';

describe('SearchAllStudentsComponent', () => {
  let component: SearchAllStudentsComponent;
  let fixture: ComponentFixture<SearchAllStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAllStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAllStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
