import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {WorkerService} from '../services/worker.service';
import {Flight} from '../interfaces/flight.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.scss']
})
export class FlightsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() workerId: number;
  flights: Flight[];
  currentFlight: Flight;
  sub: Subscription;

  constructor(private workerService: WorkerService) {
  }

  ngOnInit() {
    this.updateFlightsList();
    setInterval(() => this.updateFlightsList(), 60000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.workerId.firstChange) {
      this.updateFlightsList();
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  updateFlightsList() {
    this.sub = this.workerService.getFlightsOfWorker(this.workerId)
      .subscribe((data: Flight[]) => {
        this.flights = data;
        this.showFlight(this.currentFlight ?? this.flights[0]);
      });
  }

  showFlight(flight: Flight) {
    this.currentFlight = flight;
  }

}
