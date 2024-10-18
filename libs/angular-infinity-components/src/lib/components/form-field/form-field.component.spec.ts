import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfinityFormFieldComponent } from './form-field.component';

describe('InfinityFormFieldComponent', () => {
  let component: InfinityFormFieldComponent;
  let fixture: ComponentFixture<InfinityFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfinityFormFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfinityFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
