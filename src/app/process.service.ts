import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ProcessMock } from './process/mock-process';
import { Process } from './process/process';

@Injectable()
export class ProcessService {
  /* // old
  getHeroes(): Hero[] {
    return HEROES;
  }*/
  getProcess(): Observable<Process[]> {
    return of(ProcessMock);
  }

  getSingleProcess(id: number): Observable<Process> {
    return of(ProcessMock.find(process => process.id === id));
  }

  constructor() { }

}
