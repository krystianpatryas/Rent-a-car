import { Injectable } from '@angular/core';
import { map, Observable, filter  } from 'rxjs';
import { Car } from '../globals/Car';
import { myUrl } from '../url/url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {


  constructor(private http: HttpClient) {}

  public getCars():Observable<Car> {
    return this.http.get<Car>(myUrl)
  }

 public getTowns(town: string)  {
    return this.getCars().pipe(
      map(car => {
        if(car.town == town) {
          console.log('oh right')
        } else {
          console.log('noooo')
        }
})


)}
}
