import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit{
  constructor(private route:ActivatedRoute,
              private employeeService:EmployeeService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    });
  }
  
  id:Number = -1;
  employee:Employee = {id:-1,email:"",firstName:"",lastName:""}
}
