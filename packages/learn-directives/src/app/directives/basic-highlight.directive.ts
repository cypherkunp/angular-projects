import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // this is not recommended, accessing the DOM via ref
    // this could lead to security vulnerabilities
    this.elementRef.nativeElement.style.backgroundColor = 'lightGreen';
  }
}
