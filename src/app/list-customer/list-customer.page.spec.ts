import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCustomerPage } from './list-customer.page';

describe('ListCustomerPage', () => {
  let component: ListCustomerPage;
  let fixture: ComponentFixture<ListCustomerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
