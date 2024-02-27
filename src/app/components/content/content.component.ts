import { Component } from '@angular/core';
import { Employee } from 'src/app/core/model/employee';
import { ContentService } from 'src/app/core/service/content.service';
import { SearchEmployee } from 'src/app/core/model/search-employee';

@Component({
  standalone: false,
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  
})
export class ContentComponent {

  constructor(private contentService: ContentService) {}

  //employees = EMPLOYEE;

  employees: Employee[] = [];

  searchEmployee: SearchEmployee = new SearchEmployee();

  consultEmployee(): void {
    console.log("searchEmployee.id"+this.searchEmployee.id);
    this.employees.splice(0);
    let promise;
    if(this.searchEmployee.id==null || this.searchEmployee.id==undefined){
      console.log("you have selected list of employees")
      promise = this.contentService.findAllEmployees()
      .then((listEmployees) => {
        for (let i = 0; i < listEmployees.length; i++) {
          this.employees.push(listEmployees[i]);
          console.log(listEmployees[i]);
        }
      });
      console.log(this.employees);
    }else{
      console.log("you have searched a employee");
      promise = this.contentService.findByIdEmployee(Number.parseInt(this.searchEmployee.id))
      .then((employee) => {
        this.employees.push(employee);
      })
      console.log(this.employees);
    }
  }


}
