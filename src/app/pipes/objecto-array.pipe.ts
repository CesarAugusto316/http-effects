import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'objectoArray'
})
export class ObjectoArrayPipe implements PipeTransform {

  transform = (objects: any) => {
    return Object.values(objects);
  }
}
