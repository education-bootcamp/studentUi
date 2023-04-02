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
  findStudent(id:string):Observable<any>{
    return this.httpService.get(this.baseUrl+'students/'+id);
  }
  deleteStudent(id:string):Observable<any>{
    return this.httpService.delete(this.baseUrl+'students?id='+id);
  }

  updateStudent(name: string, address: string, salary: number, id: string): Observable<any> {
    return this.httpService.put(this.baseUrl + 'students?id='+id, {
      name:name,
      address,
      salary
    });
  }

  findAllStudents(page:any, size:any):Observable<any>{
    return this.httpService.get(this.baseUrl+'students/list?page='+page+'&size='+size);
  }

}
