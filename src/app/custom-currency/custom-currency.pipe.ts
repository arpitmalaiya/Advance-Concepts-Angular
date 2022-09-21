import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * @description
 * Formats a value to USD Currrency partially based in parameters.
 * ForceTwoDecimals determine decimal places if value has any decimals.
 * Trailing Content determine content appended to valid value.
 *
 * @UsageNotes
 *
 * ### forceTwoDecimals
 *
 * Boolean value to show two decimal places in case any decimal present.
 *
 * ### trailingContent
 *
 * Following string will be appended to valid currency output value.
 *
 * ### Example
 * <p>{{125.26 | customCurrency : true : 'per year'}}</p>
 *
 */
@Pipe({
  name: 'customCurrency',
})
export class CustomCurrencyPipe implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe) {}

  /**
   * @param value The value to be formatted.
   * @param forceTwoDecimals Sets decimal places to be shown.
   * [See more](#forceTwoDecimals).
   * @param trailingContent Content to be appended.
   * [See more](#trailingContent).
   */
  transform(
    value: number | null | undefined,
    forceTwoDecimals?: boolean,
    trailingContent?: string
  ): string {
    let fCurrency: any = value ?? '-';

    if (typeof fCurrency === 'number') {
      const format = forceTwoDecimals && fCurrency % 1 > 0 ? '1.2-2' : '1.0-2';
      fCurrency = this.currencyPipe.transform(
        fCurrency,
        'USD',
        'symbol',
        format
      );

      if (trailingContent) {
        fCurrency = fCurrency.concat(' ', trailingContent);
      }
    }
    return fCurrency;
  }
}
