import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from '../globals/Car';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
@ViewChild('addCarForm') addCarForm: NgForm
showForm = false;
showDeletingList = false;
selectedCar: any;
id: string;
cars: Car[]

car: Car = {
  _id: '',
  brand: '',
  model: '',
  year: 0,
  img: '',
  description: '',
  engine: '',
  power: '',
  maxspeed: '',
  time: '',
  dateStart: '',
  dateEnd: '',
  town: ''
};

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.carsService.getCars().subscribe(cars => this.cars = cars)
  }

  post(newCar: Car) {
    this.carsService.postCar(newCar).subscribe();
  }

  delete(carInfo: string) {
    const id = carInfo.split(", ")[2]
    this.carsService.deleteCar(id);
  }
}
