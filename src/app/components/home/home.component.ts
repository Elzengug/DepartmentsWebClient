import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentModel } from 'src/app/models/departmentModel';
import { DepartmentPage } from 'src/app/models/departmentPage';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor(private departmentService: DepartmentService) { 
    this.init();
  }
  departmentPage : DepartmentPage;
  init(page: number = 1){   
      this.departmentService.getDepartments(page).subscribe(
        (data: DepartmentPage) => this.departmentPage = data);
  }
  changePage(page: number){
    this.departmentService.getDepartments(page).subscribe(
      (data: DepartmentPage) => this.departmentPage = data);
  }
  deleteDepartment(id : number){
    if(confirm("Are you sure to delete this department?")){
    this.departmentService.deleteDepartment(id);
    this.init();
    }
  }
}

