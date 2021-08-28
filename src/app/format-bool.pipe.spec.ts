import { TranslateService } from '@ngx-translate/core';
import { FormatBoolPipe } from './format-bool.pipe';

describe('FormatBoolPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatBoolPipe(
      jasmine.createSpyObj<TranslateService>(['get'])
    );
    expect(pipe).toBeTruthy();
  });
});
