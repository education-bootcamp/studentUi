import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-search-all-students',
  templateUrl: './search-all-students.component.html',
  styleUrls: ['./search-all-students.component.scss']
})
export class SearchAllStudentsComponent implements OnInit {

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {

  }

}
