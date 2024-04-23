import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdsComponent } from './dds.component';

describe('DdsComponent', () => {
  let component: DdsComponent;
  let fixture: ComponentFixture<DdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
