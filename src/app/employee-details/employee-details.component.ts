import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number | any;
  employee!: Employee ;
  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.employee=new Employee();

    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee=data;
    })
  }

}
