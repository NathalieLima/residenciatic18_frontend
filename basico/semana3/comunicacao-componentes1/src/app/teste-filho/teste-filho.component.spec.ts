import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteFilhoComponent } from './teste-filho.component';

describe('TesteFilhoComponent', () => {
  let component: TesteFilhoComponent;
  let fixture: ComponentFixture<TesteFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TesteFilhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesteFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
