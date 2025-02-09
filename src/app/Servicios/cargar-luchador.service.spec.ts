import { TestBed } from '@angular/core/testing';

import { CargarLuchadorService } from './cargar-luchador.service';

describe('CargarLuchadorService', () => {
  let service: CargarLuchadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarLuchadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
