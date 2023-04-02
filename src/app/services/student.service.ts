import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = environment.baseUrl;

  constructor(private httpService: HttpClient) {
  }

  saveStudent(name: string, address: string, salary: number): Observable<any> {
    return this.httpService.post(this.baseUrl + 'students', {
      name:name,
      address,
      salary
    });
  }

}
