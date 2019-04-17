import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentModel } from 'src/app/models/departmentModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor(private departmentService: DepartmentService) { 
    this.init();
  }
  departments : DepartmentModel[];
  department: DepartmentModel
  init(){
      this.departmentService.getDepartments().subscribe(
        (data: DepartmentModel[]) => this.departments = data);
  } 
  deleteDepartment(id : number){
    debugger;
    this.departmentService.deleteDepartment(id)
  }
}

