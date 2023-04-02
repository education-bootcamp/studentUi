import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-find-all-students',
  templateUrl: './find-all-students.component.html',
  styleUrls: ['./find-all-students.component.scss']
})
export class FindAllStudentsComponent implements OnInit {
  page: number = 0;
  size: number = 5;

  studentsArray:any =[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.studentService.findAllStudents(this.page, this.size).subscribe(response=>{
      this.studentsArray = response.data.dataList;
    })
  }

}
