import { Injectable } from '@angular/core';
import { map, pipe, Observable, filter, Subject } from 'rxjs';
import { Car } from '../globals/Car';
import { myUrl } from '../url/url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  townSubject = new Subject<string>();
  filterStatus = new Subject<boolean>();
  town: string;
  cars: Car[] = [];

  constructor(private http: HttpClient) {}

  public getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(myUrl);
  }

  public getFilteredCars(): Observable<Car[]> {
    this.getTown();
    return this.getCars()
      .pipe(
        map((cars) => cars.filter(car => car.town === this.town))
      )
      //dopracować getTown serwisu = undefined
  }

  public getTown() {
    this.townSubject.subscribe((town) => (this.town = town));
    console.log('Dane z getTown serwisu = ' + this.town);
  }
}


// public getFilteredCars(): Observable<Car[]> {
//   this.getTown();
//   return this.http.get<Car[]>(myUrl).pipe(
//     map((cars) => cars.filter(car => car.town === this.town))
//   )
// }
