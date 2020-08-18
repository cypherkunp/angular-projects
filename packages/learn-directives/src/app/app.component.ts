import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learn-directives';
  allNumbers = [1, 2, 3, 4, 5, 6];
  numbers = this.allNumbers;

  isOdd(number: number): boolean {
    return number % 2 !== 0;
  }

  showOddNumbers(): void {
    this.numbers = this.allNumbers.filter((number) => this.isOdd(number));
  }

  showEvenNumbers(): void {
    this.numbers = this.allNumbers.filter((number) => !this.isOdd(number));
  }

  showAllNumbers(): void {
    this.numbers = this.allNumbers;
  }
}
