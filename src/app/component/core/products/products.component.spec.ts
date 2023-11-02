import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapInfoCircle, bootstrapPencilSquare, bootstrapTrash3 } from '@ng-icons/bootstrap-icons';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent]
    });
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
