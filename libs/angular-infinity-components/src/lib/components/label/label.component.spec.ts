import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfinityLabelComponent } from './label.component';

describe('InfinityLabelComponent', () => {
  let component: InfinityLabelComponent;
  let fixture: ComponentFixture<InfinityLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfinityLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfinityLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
