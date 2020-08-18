import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appConfigurableHighlight]',
})
export class ConfigurableHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'lightPink';

  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;

  @HostListener('mouseenter') mouseOver(eventData: Event): void {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event): void {
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
