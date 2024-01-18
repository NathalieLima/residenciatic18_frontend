import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPaisesComponent } from './dados-paises.component';

describe('DadosPaisesComponent', () => {
  let component: DadosPaisesComponent;
  let fixture: ComponentFixture<DadosPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadosPaisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
