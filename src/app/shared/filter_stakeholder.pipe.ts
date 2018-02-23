import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterstakeholder'
})
export class FilterPipeStakeholder implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    return items.filter(
      function (items) {
        return items.id.indexOf(searchText) > -1 || items.type.indexOf(searchText) > -1 || items.name.indexOf(searchText) > -1;
      }
    );
  }
}
