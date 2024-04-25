import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractViewAttributeComponent } from './abstract-view-attribute.component';

describe('AbstractViewAttributeComponent', () => {
  let component: AbstractViewAttributeComponent;
  let fixture: ComponentFixture<AbstractViewAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstractViewAttributeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbstractViewAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
