import { ProcessService } from './../../process.service';
import { Component, OnInit } from '@angular/core';
import { ProcessMock } from '../mock-process';
import { Process } from '../process';

@Component({
  selector: 'app-list-process',
  templateUrl: './list-process.component.html',
  styleUrls: ['./list-process.component.scss']
})
export class ListProcessComponent implements OnInit {
  tablehead = ['Bezeichnung', 'Prozessort', 'Prozessinitiator'];
  // tabledata = ProcessMock;
  selectedProcess: Process;
  tabledata: Process[]; // Array von Service

  getProcess(): void {
    this.processService.getProcess()
      .subscribe(process => this.tabledata = process);
    // suscribe wartet auf die Antwort/ Heros des Server
  }

  // onSelect(hero: Hero): void {
  //   console.log('klick');
  //   this.selectedHero = hero;
  // }

  // private, weil ich die var. des Service im Template nicht verwende
  constructor(private processService: ProcessService) { }

  ngOnInit() {
    this.getProcess();
  }


}
