import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ApplicationsService} from '../../services/applications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-app-page',
  templateUrl: './submit-app-page.component.html',
  styleUrls: ['./submit-app-page.component.css']
})
export class SubmitAppPageComponent implements OnInit {
  
  public result:any;
  public personForm:FormGroup;
  constructor(public _service:ApplicationsService, public router:Router){}
  
  ngOnInit(){
    this.personForm= new FormGroup({
      firstName:new FormControl('', [Validators.required, Validators.maxLength(255)]),
      middleName:new FormControl('', [Validators.maxLength(255)]),
      lastName:new FormControl('', [Validators.required, Validators.maxLength(255)]),
      dob:new FormControl('', [Validators.required]),
      maritalStatus:new FormControl('',[Validators.required]),
      ssn:new FormControl('', [Validators.required]),
      loanAmount:new FormControl('', [Validators.required]),
      loanPurpose:new FormControl('', [Validators.required]),
      description:new FormControl(''),
      address:new FormGroup({
        addressLine1:new FormControl('', [Validators.required, Validators.maxLength(255)]),
        addressLine2:new FormControl('', [Validators.maxLength(255)]),
        city:new FormControl('', [Validators.required, Validators.maxLength(255)]),
        state:new FormControl('', [Validators.required, Validators.maxLength(255)]),
        postalCode:new FormControl('', [Validators.required, Validators.min(10000), Validators.max(99999)])
      }),
      contactInfo:new FormGroup({
        homePhone:new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
        officePhone:new FormControl('', [Validators.min(1000000000), Validators.max(9999999999)]),
        mobileNumber:new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
        email:new FormControl('', Validators.compose([Validators.required, Validators.email]))
      }),
      empDetails:new FormGroup({
        employerName:new FormControl('', [Validators.required, Validators.maxLength(255)]),
        salary:new FormControl('', [Validators.required]),
        workExpYear:new FormControl(''),
        workExpMonth:new FormControl('', [Validators.max(12)]),
        designation:new FormControl('', [Validators.maxLength(255)]),
        empAddress:new FormGroup({
          empAddressLine1:new FormControl('', [Validators.required, Validators.maxLength(255)]),
          empAddressLine2:new FormControl('', [Validators.maxLength(255)]),
          empCity:new FormControl('', [Validators.required, Validators.maxLength(255)]),
          empState:new FormControl('', [Validators.required, Validators.maxLength(255)]),
          empPostalCode:new FormControl('', [Validators.required, Validators.min(10000), Validators.max(99999)])
        })
      })
    })
  }
  public cancel(url):any{
    this.router.navigate([url]);
  }
  public onSubmit(url):any{
    console.log(this.personForm.value);
    let reponse = this._service.postData(this.personForm.value);
    reponse.subscribe(data => {
      this.result = data;
      console.log(data);
      if(data=="SUCCESSFUL"){
        this.router.navigate([url]);
      } 
    });
    
     
    
    
  };
    
}
