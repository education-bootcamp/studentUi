import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {

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
        name: response.data.name,
        address: response.data.address,
        salary: response.data.salary
      })
    })
  }

  updateStudent() {
    this.studentService.updateStudent(
      this.form.get('name')?.value!,
      this.form.get('address')?.value!,
      Number.parseInt(this.form.get('salary')?.value!),
      this.form.get('id')?.value!
    ).subscribe(response => {
      alert('updated!');
    }, error => {
      console.log(error)
    })
  }
}
