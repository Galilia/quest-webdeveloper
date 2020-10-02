import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../interfaces/flight.interface';

@Component({
  selector: 'app-flight-view',
  templateUrl: './flight-view.component.html',
  styleUrls: ['./flight-view.component.scss']
})
export class FlightViewComponent implements OnInit {
  @Input() flight: Flight;

  constructor() { }

  ngOnInit(): void {
  }

}
