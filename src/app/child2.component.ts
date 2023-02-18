import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormService } from './user-form.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div [formGroup]="form">
      <div>
        <label id="email">Email</label>
        <input id="email" [formControl]="form.controls.email" />
      </div>
    </div>
  `,
})
export class Child2Component {
  readonly form = inject(UserFormService).form;
}
