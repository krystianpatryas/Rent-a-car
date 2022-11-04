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
  town: string;

  constructor(private http: HttpClient) {}

  public getCars():Observable<Car[]> {
    return this.http.get<Car[]>(myUrl);
  }

  public getFilteredCars() {

    this.getTown();

    return this.getCars().pipe(map((car) => {
      car.filter(cars => cars.town == this.town);

      console.log('Dane z serwisu = ' + car);
    }));
  }

  getTown() {
    this.townSubject.subscribe(town => this.town = town)
    console.log('Dane z getTown serwisu = ' + this.town)
  }

}
