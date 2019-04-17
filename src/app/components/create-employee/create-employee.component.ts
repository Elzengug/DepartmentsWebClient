import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { EmployeeModel } from 'src/app/models/employeeModel';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent  {
  constructor(private employeeService: EmployeeService, private router: Router) { }
  employee: EmployeeModel = new EmployeeModel();
  submit(employee: EmployeeModel) {
    this.employeeService.createEmployee(employee);
    this.router.navigate([""]);
  }
}
