import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8888/api/v1/employees";
  
  constructor(private httpClient:HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  
  createEmployee(employee: Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  getEmployeeById(id:Number):Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(employee:Employee):Observable<Object> {
    return this.httpClient.put(`${this.baseURL}`,employee);
  }

  deleteEmployee(id:Number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
