import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SaveStudentComponent} from "./components/save-student/save-student.component";
import {FindStudentComponent} from "./components/find-student/find-student.component";
import {UpdateStudentComponent} from "./components/update-student/update-student.component";
import {DeleteStudentComponent} from "./components/delete-student/delete-student.component";
import {FindAllStudentsComponent} from "./components/find-all-students/find-all-students.component";
import {SearchAllStudentsComponent} from "./components/search-all-students/search-all-students.component";

const routes: Routes = [
  {path: '', redirectTo: '/save', pathMatch: 'full'},
  {path: 'save', component: SaveStudentComponent},
  {path: 'find', component: FindStudentComponent},
  {path: 'update', component: UpdateStudentComponent},
  {path: 'delete', component: DeleteStudentComponent},
  {path: 'find-all', component: FindAllStudentsComponent},
  {path: 'search-all', component: SearchAllStudentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
