import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditCategorieComponent } from './add-or-edit-categorie.component';

describe('AddOrEditCategorieComponent', () => {
  let component: AddOrEditCategorieComponent;
  let fixture: ComponentFixture<AddOrEditCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
