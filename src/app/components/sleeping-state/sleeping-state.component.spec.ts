import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepingStateComponent } from './sleeping-state.component';

describe('SleepingStateComponent', () => {
  let component: SleepingStateComponent;
  let fixture: ComponentFixture<SleepingStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleepingStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleepingStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
