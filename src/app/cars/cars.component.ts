import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  public cars: any;
  public town: any;
  public dateStart: any;
  public dateEnd: any;

  constructor(private CarsService: CarsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.town = params['town'];
      this.dateStart = params['dateStart'];
      this.dateEnd = params['dateEnd'];
    });
    this.getCars(this.town, this.dateStart, this.dateEnd);
  }

  private getCars(town?: string, dateStart?: string, dateEnd?: string ) {
    return this.CarsService.getCars(town, dateStart, dateEnd).subscribe((cars) => {
      this.cars = cars;
    });
  }
}
