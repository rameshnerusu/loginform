import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['Name', 'password', 'jobtype'];
  
  
  registeredentries=new MatTableDataSource<any>([]);
  
  
  jobTypes = ['Software Engineer', 'Software Developer', 'Web Developer', 'QA Engineer', 'UI/UX Designer'];

  frmRegister = new FormGroup({
    Name: new FormControl("Ramesh"),
    Password: new FormControl("ramesh@123"),
    Jobtype: new FormControl("")
  });

  onSubmit(): void {
    alert("Register button is clicked");
    this.registeredentries.data.push({
      // Name: this.frmRegister.value.Name,
      Name: this.frmRegister.value.Name,
      password: this.frmRegister.value.Password,
      jobtype: this.frmRegister.value.Jobtype
    });
    console.log(this.registeredentries); // Verify data is pushed correctly
    this.frmRegister.reset(); // Optional: Reset the form after submission
  }


}
