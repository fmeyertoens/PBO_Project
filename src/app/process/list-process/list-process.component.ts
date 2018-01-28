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
    //   .subscribe(process => this.tabledata = process);
    this.processService.getAll().subscribe(process => this.tabledata = process);
  }

  constructor(private processService: ProcessService) { }

  ngOnInit() {
    this.getProcess();
  }


}
