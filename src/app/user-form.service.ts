import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { distinctUntilChanged, filter, map, takeUntil } from 'rxjs';

@Injectable()
export class UserFormService {
  readonly form = inject(FormBuilder).group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor() {
    // Trigger side-effects for the form
    this.deriveEmailFromName();
  }

  private deriveEmailFromName() {
    const email$ = this.form.valueChanges.pipe(
      filter((value) => !!(value.firstName && value.lastName)),
      map((value) => `${value.firstName}.${value.lastName}@company.io`),
      map((email) => email.toLowerCase()),
      distinctUntilChanged()
    );

    email$
      .pipe(filter(() => this.form.controls.email.pristine))
      .subscribe((email) => this.form.patchValue({ email }));
  }
}
