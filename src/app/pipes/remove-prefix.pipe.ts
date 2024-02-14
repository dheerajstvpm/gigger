import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removePrefix',
})
export class RemovePrefixPipe implements PipeTransform {
  transform(name: string): string {
    const x = name.substring(name.indexOf('_') + 1);
    return x.substring(0, x.lastIndexOf('.'));
  }
}
