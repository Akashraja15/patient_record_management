import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediClaimComponent } from './medi-claim.component';

describe('MediClaimComponent', () => {
  let component: MediClaimComponent;
  let fixture: ComponentFixture<MediClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
