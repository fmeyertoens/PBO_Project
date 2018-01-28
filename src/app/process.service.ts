import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
// import { ProcessMock } from './process/mock-process';
import { Process } from './process/process';
import { ModifyRestdata } from './shared/modify-restdata';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { retry } from 'rxjs/operator/retry';

@Injectable()
export class ProcessService {
  private headers: Headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
   }

  getAll(): Observable<Array<Process>> {
    return this.http
      .get('data/process.json')
      .retry(3)
      .map(response => response.json())
      .map(rawProcess => ModifyRestdata.modifyProcess(rawProcess))
      .catch(this.errorHandler);
  }

   private errorHandler(error: Error | any): Observable<any> {
     return Observable.throw(error);
   }

  // getProcess(): Observable<Process[]> {
  //   return of(ProcessMock);
  // }

  // getSingleProcess(id: number): Observable<Process> {
  //   return of(ProcessMock.find(process => process.id === id));
  // }


}
