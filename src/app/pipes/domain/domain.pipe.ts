import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domain'
})
export class DomainPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const arr = value.split('');
    // figure this trash out
    // return value.substring(arr.indexOf(':')+7, arr.indexOf('.com'));
    const res = value.match(/.*(\/{2})[A-z]+.[A-z]+/)
    return res? res[0]:'link';
  }

}
