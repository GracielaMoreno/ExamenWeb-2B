import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComidaComponent } from './cards-comida.component';

describe('CardsComidaComponent', () => {
  let component: CardsComidaComponent;
  let fixture: ComponentFixture<CardsComidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsComidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
