import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  constructor(private employeeService : EmployeeService,
              private router:Router){
  }

  employees: Employee[] = [];

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployeeForm(id:Number){
    this.router.navigate(['update-employee',id]);
  }
  detailEmployee(id: number) {
    this.router.navigate(['employee-detail',id]);
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.getEmployees();
    });
  }
}
