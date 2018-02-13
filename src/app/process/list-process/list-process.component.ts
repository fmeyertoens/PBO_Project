import { FilterPipe } from './../../shared/filter.pipe';
import { ProcessService } from './../../process.service';
import { Component, OnInit } from '@angular/core';
import { Process } from '../process';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-list-process',
  templateUrl: './list-process.component.html',
  styleUrls: ['./list-process.component.scss']
})
export class ListProcessComponent implements OnInit {
  selectedProcess: Process;
  tabledata: Process[];
  sortedData;
  numberOfProcess: number;
  limit: number;
  page = 1;

  getProcess(): void {
    this.processService.getProcess()
      .subscribe(process => this.tabledata = process);
    // this.processService.getAll().subscribe(process => this.tabledata = process);
    // console.log(this.tabledata);
  }

  constructor(private processService: ProcessService) { }

  ngOnInit() {
    this.getProcess();
    this.sortedData = this.tabledata;
    this.numberOfProcess = this.tabledata.length;
    this.limit = this.tabledata.length;
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
        case 'name': return compare(a.name, b.name, isAsc);
        case 'location': return compare(a.location, b.location, isAsc);
        case 'initiator': return compare(a.initiator, b.initiator, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



