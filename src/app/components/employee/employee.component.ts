import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/models/employeeModel';
import { EmployeePage } from 'src/app/models/employeePage';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent{
  constructor( private router: ActivatedRoute, private employeeService: EmployeeService) {
    this.init();
  }
  queryId: string;
  employees : EmployeeModel[];
  employeesPage: EmployeePage;
  init(page: number = 1){
    this.router.queryParams.subscribe(params =>{
      this.queryId = params["id"]
    })
    this.employeeService.getEmployees(this.queryId, page).subscribe(
      (data: EmployeePage) => this.employeesPage = data);
  }
  changePage(page: number){
    this.router.queryParams.subscribe(params =>{
      this.queryId = params["id"]
    })
    this.employeeService.getEmployees(this.queryId, page).subscribe(
      (data: EmployeePage) => this.employeesPage = data);
  }
  deleteEmployee(id: number) {
    if(confirm("Are you sure to delete this employee?")){
      this.employeeService.deleteEmployee(id);
      this.init();
      }    
    }
}
