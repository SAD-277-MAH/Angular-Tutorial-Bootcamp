import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, targetUnit: string): any {
    if (!value) {
      return 0;
    }

    switch (targetUnit) {
      case 'km':
        return value * 1.609344;
      case 'm':
        return value * 1.609344 * 1000;
      case 'cm':
        return value * 1.609344 * 100000;
      default:
        throw new Error('Target unit not supported');
        break;
    }
  }
}
