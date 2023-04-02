import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SaveStudentComponent} from './components/save-student/save-student.component';
import {FindStudentComponent} from './components/find-student/find-student.component';
import {UpdateStudentComponent} from './components/update-student/update-student.component';
import {DeleteStudentComponent} from './components/delete-student/delete-student.component';
import {FindAllStudentsComponent} from './components/find-all-students/find-all-students.component';
import {SearchAllStudentsComponent} from './components/search-all-students/search-all-students.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SaveStudentComponent,
    FindStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    FindAllStudentsComponent,
    SearchAllStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
