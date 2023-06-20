import { Component } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  constructor(private employeeService:EmployeeService,
              private route:Router){}
  employee: Employee = {
                          id:0,
                          email:"",
                          firstName:"",
                          lastName:""
                        };
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.error(error));
  }

  goToEmployeeList(){
    this.route.navigate(['/employees']);
  }
}
