import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgUrlPipe',
})
export class ImgUrlPipe implements PipeTransform {
  
  transform(value: string, ...args) {
    console.log(value);
    var d = value.split("-");
    return "http://www.telugucalendar.org/" + d[0] + "/daily/calendar/" + d[1] + "-" + d[2] + ".png";
  }

}
