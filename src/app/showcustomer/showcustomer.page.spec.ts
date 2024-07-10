import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowcustomerPage } from './showcustomer.page';

describe('ShowcustomerPage', () => {
  let component: ShowcustomerPage;
  let fixture: ComponentFixture<ShowcustomerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
