import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMoreComponent } from './pokemon-more.component';

describe('PokemonMoreComponent', () => {
  let component: PokemonMoreComponent;
  let fixture: ComponentFixture<PokemonMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonMoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
