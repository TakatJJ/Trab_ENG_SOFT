import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposeDialogComponent } from './propose-dialog.component';

describe('ProposeDialogComponent', () => {
  let component: ProposeDialogComponent;
  let fixture: ComponentFixture<ProposeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
