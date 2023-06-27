import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLowercase]'
})
export class LowercaseDirective {
  constructor() { }
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement
    let lowered = input.value.toLowerCase();
    input.value = lowered;
  }
}
