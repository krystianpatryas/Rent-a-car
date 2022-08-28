import { Component, OnInit,  } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../globals/Car';
import { CarsService } from '../services/cars.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  public cars: any;

  constructor(private CarsService: CarsService) {}

  ngOnInit() {
    this.getCars();
  }

  private getCars(): void {
    this.CarsService.getCars().subscribe((car) => {
      this.cars = car;

    });
  }


}
