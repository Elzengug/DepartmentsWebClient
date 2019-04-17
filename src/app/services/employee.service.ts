import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EmployeeModel } from '../models/employeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  adres : string = "";
  constructor(private http: HttpClient, private rout: Router) {
    this.adres = environment.host;
  }
  getEmployees(id: string){
    const params = new HttpParams().set('id', id.toString())
    return this.http.get(this.adres + "/api/Employee/GetEmployeesById", {params})
  }
  createEmployee(employee : EmployeeModel){
      const body = {
        Name : employee.name
      };
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json; charset=utf-8');
      this.http.post(this.adres + "/api/Employee/CreateEmployee", body, {headers: headers})
          .subscribe(
            () => this.rout.navigate([""]),
            err => console.log(err),
          );
    }
    updateEmployee(employee : EmployeeModel, id: string){
      const body = {
        Name : employee.name
      };
      const params = new HttpParams().set('id', id.toString())
      this.http.put(this.adres + "/api/Employee/UpdateEmployee", body , {params} )
          .subscribe(
            () => this.rout.navigate([""]),
            err => console.log(err),
          );
    } 
    deleteEmployee(id: number){
      const params = new HttpParams().set('id', id.toString())
     this.http.delete(this.adres + "/api/Employee/DeleteEmployee", {params}).subscribe(
      err => console.log(err)
    )};
}
