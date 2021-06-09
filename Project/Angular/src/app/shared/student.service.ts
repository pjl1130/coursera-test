import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Student } from './student.model';

@Injectable()
export class StudentService {
  //selectedStudent: Student;
 // students: Student[];
  readonly baseURL = 'http://localhost:3000/student';

  constructor(private http: HttpClient) { }

  postStudent(stud: Student) {
    return this.http.post(this.baseURL, stud);
  }

  getStudentList() {
    return this.http.get(this.baseURL);
  }

  putStudent(emp: Student) {
   // return this.http.put(this.baseURL + `/${stud._id}`, stud);
  }

  deleteStudent(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
