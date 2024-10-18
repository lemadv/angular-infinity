import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfinityInputDirective } from '../../directives/input/input.directive';
import { NgControl } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { defer } from 'rxjs';

@Component({
  selector: 'infinity-form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfinityFormFieldComponent implements AfterViewInit {
  infinityInput = contentChild(InfinityInputDirective);
  ngControl = contentChild(NgControl);

  focused = signal(false);
  touched = signal(false);

  inputElement = computed(() => this.infinityInput()?.inputElement());

  floatingLabelTop = computed(() => {
    return this.touched() || this.inputElement()?.value;
  });

  floatingLabel = computed(() => {
    return this.touched() && !this.focused() && !this.inputElement()?.value;
  });

  status = signal<string | null>(null);

  hasError = computed(() => {
    return this.status() === 'INVALID';
  });


  constructor() {}

  ngAfterViewInit(): void {
    const ngControl = this.ngControl();
    if (ngControl) {
      this.status.set(ngControl.status);
    }

    this.infinityInput()?.focusGained.subscribe(() => {
      this.focused.set(true);
      this.touched.set(true);
    });

    this.infinityInput()?.focusLost.subscribe(() => {
      this.focused.set(false);
    });

    this.ngControl()?.statusChanges?.subscribe((status) => {
      this.status.set(status);
    });

    this.ngControl()?.statusChanges?.subscribe((status) => {
      console.log(status);
    });
  }

  focusElement() {
    if (this.inputElement()) {
      this.inputElement()?.focus();
    }
  }

  mouseDown(event: MouseEvent) {
    if (event.target !== this.inputElement()) {
      event.preventDefault();
    }
  }
}
