import { Directive, ElementRef, EventEmitter, HostListener, inject, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[InfinityInput]',
  standalone: true,
})
export class InfinityInputDirective {
  @Output() focusGained = new EventEmitter<void>();
  @Output() focusLost = new EventEmitter<void>();
  private el = inject<ElementRef<HTMLInputElement>>(ElementRef);
  private renderer = inject(Renderer2);
  
  constructor() {}

  ngOnInit() {
    this.resetInputStyles();
  }

  @HostListener('focus', ['$event'])
  onFocus(event: FocusEvent) {
    this.focusGained.emit();
  }

  @HostListener('blur', ['$event'])
  onBlur(event: FocusEvent) {
    this.focusLost.emit();
  }

  private resetInputStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'appearance', 'none');
    this.renderer.setStyle(this.el.nativeElement, '-webkit-appearance', 'none');
    this.renderer.setStyle(this.el.nativeElement, '-moz-appearance', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '0');
    this.renderer.setStyle(this.el.nativeElement, 'background', 'transparent');
    this.renderer.setStyle(this.el.nativeElement, 'outline', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'margin', '0');
    this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
  }

  inputElement() {
    return this.el.nativeElement;
  }
}
