import { AbstractControlOptions, AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export class TypedFormControl<T> extends FormControl {
  constructor(
    formState?: T,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null,
  ) {
    super(formState, validatorOrOpts, asyncValidator);
  }

  readonly value: T | undefined;

  get valueChangesCasted(): Observable<T> {
    return this.valueChanges as Observable<T>;
  }

  setValue(
    value: Partial<T>,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    },
  ): void {
    super.setValue(value, options);
  }

  reset(formState?: Partial<T>, options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.reset(formState, options);
  }

  patchValue(
    value: Partial<T>,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    },
  ): void {
    super.patchValue(value, options);
  }
}
