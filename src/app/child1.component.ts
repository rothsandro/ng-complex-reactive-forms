import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormService } from './user-form.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div [formGroup]="form">
      <div>
        <label id="first-name">First Name</label>
        <input id="first-name" [formControl]="form.controls.firstName" />
      </div>
      <div>
        <label id="last-name">Last Name</label>
        <input id="last-name" [formControl]="form.controls.lastName" />
      </div>
    </div>
  `,
})
export class Child1Component {
  readonly form = inject(UserFormService).form;
}
