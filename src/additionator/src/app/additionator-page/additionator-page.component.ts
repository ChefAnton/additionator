import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additionator-page',
  standalone: true,
  imports: [ReactiveFormsModule], // Import ReactiveFormsModule for form directives
  templateUrl: './additionator-page.component.html',
  styleUrls: ['./additionator-page.component.css']
})
export class AdditionatorPageComponent {
  private router = inject(Router);
  title = 'Additionator';

  additionForm = new FormGroup({
    number1: new FormControl<number | null>(null, [Validators.required, Validators.pattern("^-?[0-9]+$")]),
    number2: new FormControl<number | null>(null, [Validators.required, Validators.pattern("^-?[0-9]+$")])
  });

  get number1() {
    return this.additionForm.get('number1');
  }

  get number2() {
    return this.additionForm.get('number2');
  }

  onSubmit(): void {
    if (this.additionForm.valid) {
      // Values from a typed reactive form are already of the specified type or null
      const num1 = this.additionForm.value.number1;
      const num2 = this.additionForm.value.number2;

      // Ensure they are not null before navigating, though 'required' validator helps
      if (num1 !== null && num2 !== null) {
         this.router.navigate(['/sum-display'], { queryParams: { val1: num1, val2: num2 } });
      } else {
        console.error("Form values are null despite being valid. This shouldn't happen with 'required'.");
      }
    } else {
      console.error("Form is invalid");
      this.number1?.markAsTouched(); // Mark fields as touched to show errors
      this.number2?.markAsTouched();
    }
  }
}