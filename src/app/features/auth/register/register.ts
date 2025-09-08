import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service/auth-service';


function matchValidator(a: string, b: string) {
  return (group: AbstractControl): ValidationErrors | null => {
    const va = group.get(a)?.value;
    const vb = group.get(b)?.value;
    return va && vb && va !== vb ? { mismatch: true } : null;
  };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
})
export class Register {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  errorMsg = '';

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    passwordGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: matchValidator('password', 'confirmPassword')})
  });

  get name() { return this.form.controls['name']; }
  get email() { return this.form.controls['email']; }
  get passwordGroup() { return this.form.controls['passwordGroup']; }
  get password() { return this.passwordGroup.get('password'); }
  get confirmPassword() { return this.passwordGroup.get('confirmPassword'); }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.errorMsg = '';
    const payload = {
      name: this.name.value!,
      email: this.email.value!,
      password: this.password?.value!,
    };
    this.auth.register(payload).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (err) => this.errorMsg = err?.error?.message || 'Inscription impossible',
    });
  }
}
