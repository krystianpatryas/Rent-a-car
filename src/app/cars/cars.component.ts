import { Component, OnInit,  } from '@angular/core';
import { map } from 'rxjs';
import { CarsService } from '../services/cars.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  public cars: any;
  public town: any;
  filterStatus = true;

  constructor(private CarsService: CarsService) {}

  ngOnInit() {
    this.getActualStatus();

    if(this.filterStatus == true) {
      this.getTown();
      this.getFilteredCars();
    } else {
      this.getCars();
    }
  }

  private getCars(): void {
    this.CarsService.getCars().subscribe((car) => {
      this.cars = car;
    });
  }

  private getTown() {
    this.CarsService.townSubject.subscribe((towns) => {
      this.town = towns;
      console.log('Dane z getTown = ' + this.town);
    })
    console.log(this.filterStatus);
  }

  private getFilteredCars() {
    this.CarsService.getFilteredCars().subscribe(car => this.cars = car);
  }

  private getActualStatus() {
    this.CarsService.filterStatus.subscribe(status => this.filterStatus = status);
  }
}
