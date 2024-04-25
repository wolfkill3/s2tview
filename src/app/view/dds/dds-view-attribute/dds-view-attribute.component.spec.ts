import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdsViewAttributeComponent } from './dds-view-attribute.component';

describe('DdsViewAttributeComponent', () => {
  let component: DdsViewAttributeComponent;
  let fixture: ComponentFixture<DdsViewAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdsViewAttributeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DdsViewAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
