import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../globals/Car';
import { Observable } from 'rxjs';
import { myUrl } from 'src/app/url/url';
import { CarsService } from 'src/app/services/cars.service';
@Component({
  selector: 'app-car-reserve',
  templateUrl: './car-reserve.component.html',
  styleUrls: ['./car-reserve.component.css']
})
export class CarReserveComponent implements OnInit {
  id: string;
  car: any;
  constructor(private route: ActivatedRoute, private carsService: CarsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCar();
  }

  getCar() {
    this.carsService.getCar(this.id).subscribe(car => this.car = car)
    // setTimeout(() => {
    //   console.log(this.car)
    // },2000)
  } //
}
