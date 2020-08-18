import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAnotherHighlight]',
})
export class AnotherHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') mouseOver(eventData: Event): void {
    this.backgroundColor = 'lightPink';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event): void {
    this.backgroundColor = 'transparent';
  }
}
