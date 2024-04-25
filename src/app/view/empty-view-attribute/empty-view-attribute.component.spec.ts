import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyViewAttributeComponent } from './empty-view-attribute.component';

describe('EmptyViewAttributeComponent', () => {
  let component: EmptyViewAttributeComponent;
  let fixture: ComponentFixture<EmptyViewAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyViewAttributeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyViewAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
