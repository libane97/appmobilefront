import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessdeniedPage } from './accessdenied.page';

describe('AccessdeniedPage', () => {
  let component: AccessdeniedPage;
  let fixture: ComponentFixture<AccessdeniedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessdeniedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
