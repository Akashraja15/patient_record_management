import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBillComponent } from './input-bill.component';

describe('InputBillComponent', () => {
  let component: InputBillComponent;
  let fixture: ComponentFixture<InputBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
