import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterApprenantComponent } from './consulter-apprenant.component';

describe('ConsulterApprenantComponent', () => {
  let component: ConsulterApprenantComponent;
  let fixture: ComponentFixture<ConsulterApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
