import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { DepartmentModel } from '../models/departmentModel';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  adres : string = "";
  constructor(private http: HttpClient, private rout: Router) {
    this.adres = environment.host;
  }
  getDepartments(){
    return this.http.get(this.adres + "/api/Department/GetAllDepartments")
  }
  createDepartment(department : DepartmentModel){
      const body = {
        Name : department.name
      };
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json; charset=utf-8');
      this.http.post(this.adres + "/api/Department/CreateDepartment", body, {headers: headers})
          .subscribe(
            () => this.rout.navigate([""]),
            err => console.log(err),
          );
    }
    updateDepartment(department : DepartmentModel, id: string){
      const body = {
        Name : department.name
      };
      const params = new HttpParams().set('id', id.toString())
      this.http.put(this.adres + "/api/Department/UpdateDepartment", body , {params} )
          .subscribe(
            () => this.rout.navigate([""]),
            err => console.log(err),
          );
    } 
    deleteDepartment(id: number){
      const params = new HttpParams().set('id', id.toString())
     this.http.delete(this.adres + "/api/Department/DeleteDepartment", {params}).subscribe(
      err => console.log(err)
    )};
 }
 

