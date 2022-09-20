import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomAriaComponent } from './custom-aria/custom-aria.component';
import { ButtonDropdownComponent } from './button-dropdown/button-dropdown.component';
import { CustomAriaDashDirective } from './directives/custom-aria-dash.directive';
import { ShowMenuDirective } from './directives/show-menu.directive';
import { CustomCurrencyPipe } from './custom-currency/custom-currency.pipe';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CustomAriaComponent,
    ButtonDropdownComponent,
    CustomAriaDashDirective,
    ShowMenuDirective,
    CustomCurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
