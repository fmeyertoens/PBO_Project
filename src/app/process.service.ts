import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ProcessMock } from './process/mock-process';
import { Process } from './process/process';
import { ModifyRestdata } from './shared/modify-restdata';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { retry } from 'rxjs/operator/retry';
import { tap } from 'rxjs/operators';

@Injectable()
export class ProcessService {
  private headers: Headers = new Headers();

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
   }

  getAll(): Observable<any> {
    return this.http
      .get('../assets/process.json').pipe(
      tap(process => console.log(process)))
      .retry(3)
      .catch(this.errorHandler);
  }


  getProcessById(id: number): Observable<any> {
    return this.http
      .get('../assets/process.json')
      .retry(3)
      .catch(this.errorHandler)
      .map((json) => json.process)
      .map((process: Process[]) => process.find(childs => childs.id === id)
      // .pipe(
      //   tap(process => console.log(process))
      );
  }

   private errorHandler(error: Error | any): Observable<any> {
     return Observable.throw(error);
   }

  getProcess(): Observable<Process[]> {
    return of(ProcessMock);
  }

  getSingleProcess(id: number): Observable<Process> {
    return of(ProcessMock.find(process => process.id === id));
  }

}
