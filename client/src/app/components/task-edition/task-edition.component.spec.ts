import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditionComponent } from './task-edition.component';

describe('TaskEditionComponent', () => {
  let component: TaskEditionComponent;
  let fixture: ComponentFixture<TaskEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
