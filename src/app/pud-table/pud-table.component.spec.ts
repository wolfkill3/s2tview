import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PudTableComponent } from './pud-table.component';

describe('PudtableComponent', () => {
  let component: PudTableComponent;
  let fixture: ComponentFixture<PudTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PudTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
