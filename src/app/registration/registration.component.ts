import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private fb:FormBuilder) { }

  registrationForm =this.fb.group({
    username:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
    password:['',Validators.required],
    confirmpassword:['',Validators.required]
  })
  ngOnInit(): void {
   
  }

}
