import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ContactusService } from '../service/contactus.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent  {
  submitted = true;
  contactForm = new FormGroup({

      fullname:new FormControl ('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
      age:new FormControl('',[Validators.required,Validators.max(100)]),
      mobile:new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
      query:new FormControl('',[Validators.required]),
      suggestion:new FormControl('',[Validators.required])
    })
    signup(){
      console.log(this.contactForm.value);
    }
  }
 


