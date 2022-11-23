import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CarsService } from '../services/cars.service';
import { Car } from '../globals/Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  public cars: any;
  public town: any;
  filterStatus = true;

  constructor(private CarsService: CarsService) {}

  ngOnInit() {
    this.getCars();
  }

  private getCars() {
    this.CarsService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }

  // private filterCars(filterProperty: string) {
    // return this.cars.filter

  }
  // private getFilteredCars(town: string) {
  //   this.CarsService.getCars(town)
  //     // .pipe(
  //     //   map((cars) => {
  //     //
  //     //     })
  //     //   )
  //     //
  //     .subscribe((cars) => {
  //       cars = cars.filter((car) => car.town === this.town);
  //       this.cars = cars;
  //     });
  // }

  // private filterCarByTown() {
  //   this.CarsService.townSubject.subscribe((town) => {
  //     this.town = town;
  //     console.log(this.town + ' z getTown ts');
  //   });
  // }

  // private getActualStatus() {
  //   this.CarsService.filterStatus.subscribe(
  //     (status) => (this.filterStatus = status)
  //   );
  // }
// }
