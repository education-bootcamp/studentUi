import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-find-student',
  templateUrl: './find-student.component.html',
  styleUrls: ['./find-student.component.scss']
})
export class FindStudentComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl(''),
    address: new FormControl(''),
    salary: new FormControl('')
  });

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  findUser() {
    this.studentService.findStudent(
      this.form.get('id')?.value!
    ).subscribe(response => {
      this.form.patchValue({
        name:response.data.name,
        address:response.data.address,
        salary:response.data.salary
      })
    })
  }
}
