import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexSystemComponent } from './kardex-system.component';

describe('KardexSystemComponent', () => {
  let component: KardexSystemComponent;
  let fixture: ComponentFixture<KardexSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KardexSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
