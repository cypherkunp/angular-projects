import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input('serverElement') element: { type: string; name: string; content: string };
  @Input('name') name: string;
  @Input('content') content: string;
  @ViewChild('heading', { static: true }) heading: ElementRef;
  @ContentChild('paraContent', { static: true }) paraContent: ElementRef;

  constructor() {
    console.log(
      `constructor() called with element [ServerElementComponent] value as: ${JSON.stringify(
        this.element
      )}`
    );
  }

  ngOnInit(): void {
    console.log(
      `ngOnInit() called with element [ServerElementComponent] value as: ${JSON.stringify(
        this.element
      )}`
    );
    console.log('Heading Value: ', this.heading.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      `ngOnChanges() called with element [ServerElementComponent] value as: ${JSON.stringify(
        this.element
      )}`,
      changes
    );
    console.log('Heading Value: ', this.heading.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log(
      `ngDoCheck() called with element [ServerElementComponent] value as: ${JSON.stringify(
        this.element
      )}`
    );
    console.log('ParaContent: ', this.paraContent.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log(
      `ngAfterContentInit() called with element [ServerElementComponent] value as: ${JSON.stringify(
        this.element
      )}`
    );

    // here you can get access to ng-content
    console.log('ParaContent: ', this.paraContent.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log(
      `ngAfterContentChecked() called with element [ServerElementComponent] value as: ${JSON.stringify(
        this.element
      )}`
    );
  }

  ngAfterViewInit(): void {
    console.log(
      `ngAfterViewInit() called with element [ServerElementComponent] value as: ${JSON.stringify(
        this.element
      )}`
    );

    // Template elements are only visible on the hooks after this hook is called
    console.log('Heading Value: ', this.heading.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log(
      `ngAfterViewChecked() called with element [ServerElementComponent] value as: ${JSON.stringify(
        this.element
      )}`
    );
  }

  ngOnDestroy(): void {
    console.log(
      `ngOnDestroy() called with element [ServerElementComponent] value as: ${JSON.stringify(
        this.element
      )}`
    );
  }
}
