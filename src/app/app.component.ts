import { Component } from '@angular/core';
import { UserFormComponent } from './user-form.components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserFormComponent],
  template: `<app-user-form />`,
})
export class AppComponent {}
