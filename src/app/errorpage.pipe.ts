import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorpage',
  standalone: true
})
export class ErrorpagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
