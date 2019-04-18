import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateDepartmentComponent } from './components/create-department/create-department.component';
import { UpdateDepartmentComponent } from './components/update-department/update-department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const appRoutes: Routes =[
  {path: "", component: HomeComponent},
  {path: "employees", component: EmployeeComponent},
  {path: "create-department", component: CreateDepartmentComponent},
  {path: "update-department", component: UpdateDepartmentComponent},
  {path: "create-employee", component: CreateEmployeeComponent},
  {path: "update-employee", component: UpdateEmployeeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateDepartmentComponent,
    UpdateDepartmentComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
