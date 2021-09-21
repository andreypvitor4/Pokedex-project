import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTelaComponent } from './poke-tela.component';

describe('PokeTelaComponent', () => {
  let component: PokeTelaComponent;
  let fixture: ComponentFixture<PokeTelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeTelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
