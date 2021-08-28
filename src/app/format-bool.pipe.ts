import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'formatBool',
  pure: false,
})
export class FormatBoolPipe implements PipeTransform {
  private lastValue: boolean | undefined;
  private formattedValue: string | undefined;

  constructor(
    private readonly translate: TranslateService,
    private readonly ref: ChangeDetectorRef
  ) {}

  transform(value: boolean): string | undefined {
    if (value === this.lastValue) {
      return this.formattedValue;
    }

    const translationKey = value ? 'BOOLEAN.TRUE' : 'BOOLEAN.FALSE';
    this.translate
      .get(translationKey)
      .toPromise()
      .then((formattedValue) => {
        this.formattedValue = formattedValue;
        this.lastValue = value;
        this.ref.markForCheck();
      });

    return this.formattedValue;
  }
}
