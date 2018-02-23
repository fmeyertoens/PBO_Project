import { ProcessService } from './../../process.service';
import { Component, OnInit } from '@angular/core';
import { Process } from '../process';

@Component({
  selector: 'app-list-process',
  templateUrl: './list-process.component.html',
  styleUrls: ['./list-process.component.scss']
})
export class ListProcessComponent implements OnInit {
  tablehead = ['Bezeichnung', 'Prozessort', 'Prozessinitiator'];
  selectedProcess: Process;
  tabledata: Process[];

  getProcess(): void {
    // this.processService.getProcess()
    this.processService.getAll()
      .subscribe(json => {
        this.tabledata = json.process.childs;
        this.sortedData = this.tabledata;
        this.numberOfProcess = this.tabledata.length;
        this.limit = this.tabledata.length;
      });
    // this.processService.getAll().subscribe(process => this.tabledata = process);
    // console.log(this.tabledata);
  }

  constructor(private processService: ProcessService) { }

  ngOnInit() {
    this.getProcess();
    // this.sortedData = this.tabledata;
    // this.numberOfProcess = this.tabledata.length;
    // this.limit = this.tabledata.length;
  }


}
