import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domain'
})
export class DomainPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const arr = value.split('');
    return value.substring(arr.indexOf('//'), arr.indexOf('.'));
  }

}
