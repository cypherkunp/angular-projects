import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { AnotherHighlightDirective } from './directives/another-highlight/another-highlight.directive';
import { ConfigurableHighlightDirective } from './directives/configurable-highlight/configurable-highlight.directive';
import { NgFalseDirective } from './directives/ng-false/ng-false.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AnotherHighlightDirective,
    ConfigurableHighlightDirective,
    NgFalseDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
