import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsIngredienteComponent } from './cards-ingrediente.component';

describe('CardsIngredienteComponent', () => {
  let component: CardsIngredienteComponent;
  let fixture: ComponentFixture<CardsIngredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsIngredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
