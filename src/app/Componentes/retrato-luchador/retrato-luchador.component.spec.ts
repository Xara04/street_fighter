import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetratoLuchadorComponent } from './retrato-luchador.component';

describe('RetratoLuchadorComponent', () => {
  let component: RetratoLuchadorComponent;
  let fixture: ComponentFixture<RetratoLuchadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetratoLuchadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetratoLuchadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
