import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/models/employeeModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent {
  constructor(private departmentService: EmployeeService, private router: ActivatedRoute) { }
  employee: EmployeeModel = new EmployeeModel();
  submit(employee: EmployeeModel) {
    let id: string;
    this.router.queryParams.subscribe(params =>{
      id = params["id"],
      employee.departmentId = params["depId"]
    }
    );
    this.departmentService.updateEmployee(employee, id); 
  }
}
