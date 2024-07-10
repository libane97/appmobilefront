import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListOrdrePage } from './list-ordre.page';

describe('ListOrdrePage', () => {
  let component: ListOrdrePage;
  let fixture: ComponentFixture<ListOrdrePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrdrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
