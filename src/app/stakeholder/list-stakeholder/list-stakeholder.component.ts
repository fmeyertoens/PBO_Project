import { Stakeholder } from './../stakeholder';
import { FilterPipeStakeholder } from './../../shared/filter_stakeholder.pipe';
import { ProcessService } from './../../process.service';
import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-list-stakeholder',
  templateUrl: './list-stakeholder.component.html',
  styleUrls: ['./list-stakeholder.component.scss']
})
export class ListStakeholderComponent implements OnInit {

  tabledata: Stakeholder[];
  sortedData;
  numberOfStakeholder: number;
  limit: number;
  page = 1;
  searchText: string;

  getStakeholder(): void {
    this.processService.getAll()
      .subscribe(json => {
        this.tabledata = json.process.stakeholder;
        this.sortedData = this.tabledata;
        this.numberOfStakeholder = this.tabledata.length;
        this.limit = this.tabledata.length;
      });
  }

  constructor(private processService: ProcessService) { }

  ngOnInit() {
    this.getStakeholder();
  }

  sortData(sort: Sort) {
    const data = this.tabledata;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'type': return compare(a.type, b.type, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



