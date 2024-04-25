import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractViewComponent } from './abstract-view.component';

describe('AbstractViewComponent', () => {
  let component: AbstractViewComponent;
  let fixture: ComponentFixture<AbstractViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstractViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbstractViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
