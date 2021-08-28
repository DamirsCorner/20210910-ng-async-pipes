import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatBool',
})
export class FormatBoolPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'BOOLEAN.TRUE' : 'BOOLEAN.FALSE';
  }
}
