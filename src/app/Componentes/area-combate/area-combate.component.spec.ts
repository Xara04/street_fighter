import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCombateComponent } from './area-combate.component';

describe('AreaCombateComponent', () => {
  let component: AreaCombateComponent;
  let fixture: ComponentFixture<AreaCombateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaCombateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaCombateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
