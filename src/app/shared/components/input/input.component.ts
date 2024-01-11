import { Component, Input, forwardRef } from '@angular/core';

import { UniqueIdService } from '../../services/unique-id.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent {
  @Input() type?: HTMLInputElement['type'];
  @Input() label?: string;
  @Input() placeholder?: HTMLInputElement['placeholder'] = '';
  @Input() required?: boolean;
  @Input() autocomplete?: HTMLInputElement['autocomplete'] = 'off';
  @Input() value?: string | number = '';
  @Input() onFocus?: (event: Event) => void;

  id!: string;

  constructor(private uniqueIdService: UniqueIdService) {}

  ngOnInit() {
    this.id = this.uniqueIdService.generateUniqueId();
  }

  onChange(_value: string) {}
  onTouched(_value: string) {}

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  handleOnChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.onChange(value);
    this.writeValue(value);
  }

  handleOnFocus(event: Event) {
    this?.onFocus?.(event);
  }
}
