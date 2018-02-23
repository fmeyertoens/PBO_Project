import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    console.log(items);
      return items.filter(
        function (items) {
          return items.location.indexOf(searchText) > -1 || items.name.indexOf(searchText) > -1 || items.initiator.indexOf(searchText) > -1;
        }
      );

  }
}
