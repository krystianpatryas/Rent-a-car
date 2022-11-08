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
  filterStatus = false;

  constructor(private CarsService: CarsService) {}

  ngOnInit() {
    this.getActualStatus();

    if(this.filterStatus) {
      // this.getTown();
      this.getFilteredCars();
      // this.CarsService.carsSubject.subscribe(filteredCars => {
      //   this.cars = filteredCars;
      //   // console.log(this.cars)
      // })
    } else {
      this.getCars();
    }
  }

  private getCars(): void {
      this.CarsService.getCars().subscribe(cars => {
        this.cars = cars;
        console.log(this.cars);
      });
  }

  private getFilteredCars(): void {
      this.CarsService.getFilteredCars().subscribe(cars => {
        this.cars = cars;
        // console.log(this.cars); //undefined
    });
  }

  private getTown() {
    this.CarsService.townSubject.subscribe(towns => {
      this.town = towns;
      console.log(this.town + ' z getTown ts')
    })
  }

  private getActualStatus() {
    this.CarsService.filterStatus.subscribe(status => this.filterStatus = status);
  }
}
