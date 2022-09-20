import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
})
export class CustomCurrencyPipe implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe) {}

  transform(value: unknown, ...args: unknown[]): unknown {
    let fCurrency: any = value ?? '-';

    const forceTwoDecimals = args[0];

    const trailingContent:any = args[1] || '';

    if (typeof fCurrency === 'number') {
      const format = forceTwoDecimals && fCurrency % 1 > 0 ? '1.2-2' : '1.0-2';
      fCurrency = this.currencyPipe.transform(fCurrency, 'INR', 'symbol', format);

      if (trailingContent) {
        fCurrency = fCurrency.toString().concat(' ', trailingContent.toString());
      }
    }
    return fCurrency;
  }
}
