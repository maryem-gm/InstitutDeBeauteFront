import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTarifComponent } from './update-tarif.component';

describe('UpdateTarifComponent', () => {
  let component: UpdateTarifComponent;
  let fixture: ComponentFixture<UpdateTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTarifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
