import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Worker} from '../interfaces/worker.interface';
import {Flight} from '../interfaces/flight.interface';


@Injectable({
  providedIn: 'root'
})

export class WorkerService {

  private readonly API_URL = 'https://interview-mock.herokuapp.com/api/workers';

  constructor(private http: HttpClient) {
  }

  query(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.API_URL);
  }

  getFlightsOfWorker(id: number): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.API_URL}/${id}`);
  }

}
