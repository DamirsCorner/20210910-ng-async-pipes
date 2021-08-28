import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'formatBool',
})
export class FormatBoolPipe implements PipeTransform {
  constructor(private readonly translate: TranslateService) {}

  transform(value: boolean): Promise<string> {
    const translationKey = value ? 'BOOLEAN.TRUE' : 'BOOLEAN.FALSE';
    return this.translate.get(translationKey).toPromise();
  }
}
