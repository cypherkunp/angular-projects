import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('mouseenter') mouseover(eventData: Event): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightBlue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
