import { Component, OnInit,  } from '@angular/core';
import { Car } from '../globals/Car'
import { map, Observable, pipe } from 'rxjs';
import { CarsService } from '../services/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent   {
  town: string = 'Wybierz miejsce odbioru auta...';
  filterStatus = true;

  constructor(public carsService: CarsService, private router: Router) { }

  sendTown() {
    this.carsService.townSubject.next(this.town);
    console.log('Dane z main = ' + this.town)
    this.getStatus();
    this.router.navigate(['/cars'])
  }

  getStatus() {
    this.carsService.filterStatus.next(this.filterStatus)
  }
}
