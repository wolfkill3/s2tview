import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdsViewComponent } from './dds-view.component';

describe('DdsViewComponent', () => {
  let component: DdsViewComponent;
  let fixture: ComponentFixture<DdsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DdsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
