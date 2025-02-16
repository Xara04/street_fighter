import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoBatallaComponent } from './campo-batalla.component';

describe('CampoBatallaComponent', () => {
  let component: CampoBatallaComponent;
  let fixture: ComponentFixture<CampoBatallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoBatallaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoBatallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
