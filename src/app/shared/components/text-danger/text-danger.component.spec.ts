import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDangerComponent } from './text-danger.component';

describe('TextDangerComponent', () => {
  let component: TextDangerComponent;
  let fixture: ComponentFixture<TextDangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextDangerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
