import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhoneService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getList() {
    console.log(this.http.get(`${this.BASE_URL}/phones`))
    return this.http.get(`${this.BASE_URL}/phones`)
    .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/phone/${id}`)
    .map((res) => res.json());;
  }
  edit(phone) {
    return this.http.put(`${this.BASE_URL}/phones/${phone.id}`, phone)
      .map((res) => res.json());
  }
  remove(id) {
    return this.http.delete(`${this.BASE_URL}/phones/${id}`)
      .map((res) => res.json());
  }
  //???? i thought we did all that in the backend as if the API ???
}
