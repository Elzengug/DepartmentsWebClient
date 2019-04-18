import { Component, OnInit } from '@angular/core';
import {DepartmentModel} from 'src/app/models/departmentModel';
import { DepartmentService } from 'src/app/services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent {
  constructor(private departmentService: DepartmentService, private router: Router) { }
  department: DepartmentModel = new DepartmentModel();
  submit(department: DepartmentModel) {
    this.departmentService.createDepartment(department);
    this.router.navigate([""]);
  }
}
