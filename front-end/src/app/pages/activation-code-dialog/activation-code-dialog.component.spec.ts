import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationCodeDialogComponent } from './activation-code-dialog.component';

describe('ActivationCodeDialogComponent', () => {
  let component: ActivationCodeDialogComponent;
  let fixture: ComponentFixture<ActivationCodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivationCodeDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivationCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
