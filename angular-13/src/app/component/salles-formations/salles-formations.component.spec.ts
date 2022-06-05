import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallesFormationsComponent } from './salles-formations.component';

describe('SallesFormationsComponent', () => {
  let component: SallesFormationsComponent;
  let fixture: ComponentFixture<SallesFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallesFormationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SallesFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
