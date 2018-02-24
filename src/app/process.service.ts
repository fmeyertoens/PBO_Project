import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Process } from './process/process';
import { ProcessLocation } from './location/location';
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
      .get('../assets/process.json')
      // .pipe(((process => console.log(process)))
      .retry(3)
      .catch(this.errorHandler);
  }


  getProcessById(id: number): Observable<Process> {
    return this.http
      .get('../assets/process.json')
      .retry(3)
      .catch(this.errorHandler)
      .map((json) => json.process.childs)
      // .pipe(
      //   tap(processes => { console.log('Processes:' ); console.log(processes); }))
      .map((processes: Process[]) => processes.find(process => parseInt(process.id, null) === id))
      ;
  }

  getLocations(): Observable<ProcessLocation[]> {
    return this.http
      .get('../assets/process.json')
      .retry(3)
      .catch(this.errorHandler)
      .map((json) => json.process.locations);
  }

  getLocationById(id: String): Observable<ProcessLocation> {
    return this.http
      .get('../assets/process.json')
      .retry(3)
      .catch(this.errorHandler)
      .map((json) => json.process.locations)
      .map((location: ProcessLocation[]) => location.find(locations => id.toString().localeCompare(locations.id) === 0))
      ;
  }

   private errorHandler(error: Error | any): Observable<any> {
     return Observable.throw(error);
   }

  getProcess(): Observable<Process[]> {
    return of(ProcessMock);
  }

  getSingleProcess(id: number): Observable<Process> {
    return of(ProcessMock.find(process => parseInt(process.id, null) === id));
  }

}
