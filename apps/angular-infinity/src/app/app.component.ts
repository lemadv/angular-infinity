import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  InfinityInputDirective,
  InfinityLabelComponent,
  InfinityFormFieldComponent,
} from '@angular-infinity-components';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    InfinityInputDirective,
    InfinityLabelComponent,
    InfinityFormFieldComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-infinity';
  readonly name = new FormControl('xxasdads@asddas.com', [Validators.email, Validators.required]);
}
