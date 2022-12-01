import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup
  success = false;
  errMessage = ''

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private registerService: RegistrationService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    }) 
  }

  register(){
    const formValue = this.registerForm.value
    this.registerService.register(formValue.username,formValue.password).subscribe({next:() => {
      this.success = true
    },error : (err) =>{
      if(err.error.code == 11000)
        this.errMessage= 'User already exists!! Try something else.'
      else 
        this.errMessage= 'Something went wrong!!'
    }})
  }

}