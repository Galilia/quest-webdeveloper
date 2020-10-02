import {Component, OnInit} from '@angular/core';
import {WorkerService} from '../services/worker.service';
import {Observable} from 'rxjs';
import {Worker} from '../interfaces/worker.interface';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss']
})
export class WorkersListComponent implements OnInit {

  workers: Observable<Worker[]>;
  workerId: number;

  constructor(private workerService: WorkerService) {
  }

  ngOnInit() {
    this.workers = this.workerService.query().pipe(
      tap(data => this.workerId = data[0].id)
    );
  }

  getFlightList(id: number) {
    this.workerId = id;
  }
}
