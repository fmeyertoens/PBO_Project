import { FilterPipeProcess } from './../../shared/filter_process.pipe';
import { ProcessLocation } from './../../location/location';
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
  tabledata: Process[];
  sortedData;
  numberOfProcess: number;
  limit: number;
  page = 1;
  locations: ProcessLocation[];

  getProcess(): void {
    this.processService.getAll()
      .subscribe(json => {
        this.tabledata = json.process.childs;
        this.processService.getLocations()
          .subscribe(locations => {
            this.locations = locations;
            this.tabledata.forEach(element => {
              element.location = locations.find(loc =>  element.location.toString().localeCompare(loc.id) === 0).city;
            });
          });

        this.sortedData = this.tabledata;
        this.numberOfProcess = this.tabledata.length;
        this.limit = this.tabledata.length;

      });
  }

  constructor(private processService: ProcessService) { }

  ngOnInit() {
    this.getProcess();
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



