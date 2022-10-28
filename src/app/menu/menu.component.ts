import { Component, OnInit,  } from '@angular/core';
import { Car } from '../globals/Car'
import { map, Observable, pipe } from 'rxjs';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  town: string = 'Wybierz miejsce odbioru auta...';

  constructor(public carsService: CarsService) { }

  ngOnInit(): void {
  }

  getTown(town: string) {
    this.carsService.getTowns(town);
  }
}
