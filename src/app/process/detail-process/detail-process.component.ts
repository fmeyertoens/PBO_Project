import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProcessService } from './../../process.service';
import { Process } from './../process';

@Component({
  selector: 'app-detail-process',
  templateUrl: './detail-process.component.html',
  styleUrls: ['./detail-process.component.scss']
})
export class DetailProcessComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private processService: ProcessService,
    private location: Location
  ) { }

  @Input() process: Process;

  getProcessDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.processService.getProcessById(id
    this.processService.getAll()
      .subscribe(json => {
        console.log(json);
        this.process = json.process.childs.find(process => parseInt(process.id, null) === id);
        console.log('ergebnis: ' + json.process.childs[0].id);
      });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getProcessDetail();
  }
}
