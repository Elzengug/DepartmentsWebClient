import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeModel } from 'src/app/models/employeeModel';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent  {
  constructor(private employeeService: EmployeeService, private router: ActivatedRoute, ) { }
  employee: EmployeeModel = new EmployeeModel();
  submit(employee: EmployeeModel) {
    this.router.queryParams.subscribe(
      params => {
        employee.departmentId = params["id"]
      }
    );
    this.employeeService.createEmployee(employee);
  }
}
