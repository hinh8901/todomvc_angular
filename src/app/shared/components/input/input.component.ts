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
      multi: true
    }
  ]
})
export class InputComponent {
  @Input() type?: HTMLInputElement['type']
  @Input() label?: string
  @Input() placeholder?: HTMLInputElement['placeholder'] = ""
  @Input() required?: boolean

  id!: string

  constructor(private uniqueIdService: UniqueIdService) {}

  ngOnInit() {
    this.id = this.uniqueIdService.generateUniqueId()
  }

  writeValue(value: any): void {  
    // this.control.setValue(value, { emitEvent: false });  
  }  
  
  registerOnChange(fn: (value: any) => void): void {  
    // this.onChange = fn;  
    // this.control.valueChanges.subscribe(fn);  
  }  
  
  registerOnTouched(fn: () => void): void {  
    // this.onTouched = fn;  
  }
}
