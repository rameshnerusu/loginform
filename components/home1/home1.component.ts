import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['Name', 'password', 'jobtype'];

   registeredentries:any[]=[];
   
   
  ngOnInit(): void {
  }
   public frmRegister=new FormGroup({
    Name:new FormControl("Ramesh"),
    Password:new FormControl("ramesh@123"),
    Jobtype:new FormControl("")
   })
   onSubmit(){
    alert("the submit is clicked");
     this.registeredentries.push({
      Name:this.frmRegister.value.Name,
      password:this.frmRegister.value.Password,
      jobtype:this.frmRegister.value.Jobtype
       
   })
     console.log(this.registeredentries);
   }
   
   
}
