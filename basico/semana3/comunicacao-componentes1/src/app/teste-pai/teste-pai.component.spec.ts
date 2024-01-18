import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestePaiComponent } from './teste-pai.component';

describe('TestePaiComponent', () => {
  let component: TestePaiComponent;
  let fixture: ComponentFixture<TestePaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestePaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestePaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
