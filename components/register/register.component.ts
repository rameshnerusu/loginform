import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  editingItem: any = null;
  ngOnInit(): void {
  }
  registerForm: FormGroup;
  jobTypes: string[] = ['Associate Engineer', 'Software Engineer','seniorsoftware engineer','Software Developer'];
  displayedColumns: string[] = ['name', 'password', 'jobType','Edit'];
  dataSource = new MatTableDataSource<any>([]);
  isLoading: boolean = false;
  details:boolean=false;
  

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(4)]],
      password: ['', [Validators.required]],
      jobType: ['', Validators.required]
    });
  }

  // onSubmit() {
  //   if (this.registerForm.valid) {
  //     const formData = this.registerForm.value;
  //     this.dataSource.data.push(formData);
  //     this.dataSource._updateChangeSubscription(); // Refresh the table
  //     this.registerForm.reset();
  //   }
  // }
  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.details=true;
      
      setTimeout(() => {
      if (this.editingItem) {
        // Update existing item in dataSource
        const index = this.dataSource.data.indexOf(this.editingItem);
        this.dataSource.data[index] = this.registerForm.value;
        this.editingItem = null; // Reset editing state
      } else {
        
        this.dataSource.data.push(this.registerForm.value);
      }
      this.dataSource._updateChangeSubscription(); // Refresh the table
      this.registerForm.reset();
      this.isLoading = false;
    },5000);
    }
  }

  editItem(element: any): void {
    console.log(element);
    this.editingItem = element;
    // Populate form with selected row's data for editing
    this.registerForm.patchValue({
      name: element.name,
      password: element.password,
      jobType: element.jobType
    });
  }
  isEditing(): boolean {
    return this.editingItem !== null;
  }


  
  
}


