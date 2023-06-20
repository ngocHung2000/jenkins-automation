import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  constructor(private employeeService:EmployeeService,
              private route:ActivatedRoute,
              private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    },error => console.error(error));
  }

  id:Number = -1;
  employee: Employee = {id:-1,email:'',firstName:'',lastName:''};

  submitUpdate() {
    this.employeeService.updateEmployee(this.employee).subscribe(data => {
      this.goToEmployeeList();
    });
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  }
