import { Injectable } from '@angular/core';
import { MockData } from '../mocks/mock-data';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor( private http: HttpClient) { }

  //TODO: implement using "https://reqres.in/api/users"
  getPeople(): Observable<MockData> {
    return of(new MockData());
  }

   
}
