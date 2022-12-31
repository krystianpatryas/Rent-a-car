import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../globals/Car';
import { myUrl } from '../url/url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarsService {

  constructor(private http: HttpClient) {}

  public getCars(town?: string, dateStart? : string, dateEnd?: string): Observable<Car[]> {
    let url = myUrl;

    if (town) {
      url += `?town=${town}`;
    }  if (dateStart) {
      url += `&dateStart=${dateStart}`
    }  if (dateEnd) {
      url += `&dateEnd=${dateEnd}`
    }
    console.log(url)
    return this.http.get<Car[]>(url);
  }

  public getCar(id: string): Observable<Car> {
    console.log(`${myUrl}/${id}`);
    return this.http.get<Car>(`${myUrl}/${id}`)
  }
}
