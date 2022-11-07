import { Injectable } from '@angular/core';
import { map, pipe, Observable, filter, Subject  } from 'rxjs';
import { Car } from '../globals/Car';
import { myUrl } from '../url/url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  townSubject = new Subject<string>();
  filterStatus = new Subject<boolean>();
  carsSubject = new Subject<Car[]>();
  town: string;
  cars: Car[];

  constructor(private http: HttpClient) {}

  public getCars():Observable<Car[]> {
    return this.http.get<Car[]>(myUrl);
  }

  public getFilteredCars() {
    this.getTown();

    return this.getCars().pipe(map((car) => {
      for(let i=0; i < 12; i++) {

        if (car[i].town === this.town) {
          this.cars.push(car[i]);
        } else {
           console.log('błąd')
          }
        this.carsSubject.next(this.cars);
      }
    }));
  }

  getTown() {
    this.townSubject.subscribe(town => this.town = town)
    console.log('Dane z getTown serwisu = ' + this.town)
  }

}
