import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  async findAllEmployees(): Promise<any> {
    console.log("Service: Searching all employees")
    try{
      const resp = await fetch('http://localhost:8080/api/v1/zeus-project/list-all-employees', {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
    const data = await resp.json();
    console.log(data);
    if (!resp.ok) {
      const message = `Code: ${resp.status}`+`, an error has occured, ${data.message}`;
      alert(message)
    }
    return data;
    }catch(error){
      console.log("Message error: ",error);
      throw new Error();
    }
  }

  async findByIdEmployee(employeeId: Number): Promise<any> {
    console.log("Service: Searching employee by id");
    try{
      const resp = await fetch('http://localhost:8080/api/v1/zeus-project/get-employee-by-id/'+employeeId, {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
      });
    const data = await resp.json();
    console.log(data);
    if (!resp.ok) {
      const message = `Code: ${resp.status}`+`, an error has occured, ${data.message}`;
      alert(message)
    }
    return data;
    }catch(error){
      console.log("Message error: ",error);
      throw new Error();
    }
  }
}
