import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return this.padNumberWithZero(minutes) + ':' + (this.padNumberWithZero(value - minutes * 60));
 }

 padNumberWithZero(num: number): string{
  return num.toString().length < 2 ? "0" + num : num.toString();
 }

}
