import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashbroadComponent } from './admindashbroad.component';

describe('AdmindashbroadComponent', () => {
  let component: AdmindashbroadComponent;
  let fixture: ComponentFixture<AdmindashbroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindashbroadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindashbroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
