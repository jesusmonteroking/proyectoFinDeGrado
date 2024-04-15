import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeleadoresComponent } from './peleadores.component';

describe('PeleadoresComponent', () => {
  let component: PeleadoresComponent;
  let fixture: ComponentFixture<PeleadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeleadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeleadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
