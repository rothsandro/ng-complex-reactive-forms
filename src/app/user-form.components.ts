import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';
import { UserFormService } from './user-form.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, Child1Component, Child2Component],
  providers: [UserFormService],
  template: `
    <div>
      <form (submit)="onSubmit($event)">
        <app-child1 />
        <app-child2 />
        <button type="submit">Submit</button>
      </form>
    </div>
  `,
})
export class UserFormComponent {
  readonly form = inject(UserFormService).form;

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.form.invalid) {
      // Focus the first invalid input
      // Note: this is just a very simple implementation for demo purposes
      // and does not cover all edge cases
      const invalidInput = document.querySelector('input.ng-invalid');
      invalidInput instanceof HTMLElement && invalidInput.focus();
      return;
    }

    this.form.disable();
    console.log('Submitting form...!', this.form.value);
  }
}
