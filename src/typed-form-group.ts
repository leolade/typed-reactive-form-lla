import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormGroup, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export class TypedFormGroup<T> extends FormGroup {
  constructor(
    controls: {
      [key in Extract<keyof Partial<T>, string>]: AbstractControl;
    },
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null,
  ) {
    super(controls, validatorOrOpts, asyncValidator);
  }

  readonly value: T | undefined;

  get valueChangesCasted(): Observable<T> {
    return this.valueChanges as Observable<T>;
  }

  getRawValue(): any {
    return super.getRawValue();
  }

  setValue(value: Partial<T>, options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.setValue(value, options);
  }

  registerControl(name: Extract<keyof T, string>, control: AbstractControl): AbstractControl {
    return super.registerControl(name, control);
  }

  removeControl(name: Extract<keyof T, string>, options?: { emitEvent?: boolean }): void {
    super.removeControl(name, options);
  }

  addControl(name: Extract<keyof T, string>, control: AbstractControl, options?: { emitEvent?: boolean }): void {
    super.addControl(name, control, options);
  }

  contains(controlName: Extract<keyof T, string>): boolean {
    return super.contains(controlName);
  }

  patchValue(value: Partial<T>, options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.patchValue(value, options);
  }

  reset(value?: Partial<T>, options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.reset(value, options);
  }

  setControl(name: Extract<keyof T, string>, control: AbstractControl, options?: { emitEvent?: boolean }): void {
    super.setControl(name, control, options);
  }

  get(path: (string | number)[] | Extract<keyof T, string>): AbstractControl | null {
    return super.get(path);
  }
}
