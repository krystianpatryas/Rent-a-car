import { Component, OnInit,  } from '@angular/core';
import { Car } from '../globals/Car'
import { map, pipe } from 'rxjs';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  // format w konsoli to RRRR-MM-DD
  check() {

    // const startDate = this.date.dateStart
    // const endDate = this.date.dateEnd

    // if(startDate < endDate) {
    //   console.log('yes')
    // } else {
    //   console.log('no')
    // }

    // this.carsService.getCars().subscribe(cars => {
    //   this.car = cars;
    //   this.car.map((x: { filter: (arg0: boolean) => any; }) => x.filter(this.car.dateStart > '2019-01-01'))

  }




  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
}
}
