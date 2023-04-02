import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-save-student',
  templateUrl: './save-student.component.html',
  styleUrls: ['./save-student.component.scss']
})
export class SaveStudentComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required)
  });

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  saveStudent() {
    this.studentService.saveStudent(
      this.form.get('name')?.value!,
      this.form.get('address')?.value!,
      Number.parseInt(this.form.get('salary')?.value!)
    ).subscribe(response => {
      alert('saved!');
    }, error => {
      console.log(error)
    })
  }
}
