import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from 'src/app/models/departmentModel';
import { DepartmentService } from 'src/app/services/department.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent {
  constructor(private departmentService: DepartmentService, private router: ActivatedRoute) { }
  department: DepartmentModel = new DepartmentModel();
  submit(department: DepartmentModel) {
    let id: string;
    this.router.queryParams.subscribe(params =>{
      id = params["id"];
    }
    );
    this.departmentService.updateDepartment(department, id); 
  }
}
