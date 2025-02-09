import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributoLuchadorComponent } from './atributo-luchador.component';

describe('AtributoLuchadorComponent', () => {
  let component: AtributoLuchadorComponent;
  let fixture: ComponentFixture<AtributoLuchadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtributoLuchadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtributoLuchadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
