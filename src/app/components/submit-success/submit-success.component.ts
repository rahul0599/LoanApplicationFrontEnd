import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-success',
  templateUrl: './submit-success.component.html',
  styleUrls: ['./submit-success.component.css']
})
export class SubmitSuccessComponent implements OnInit {

  constructor(public router:Router) { }

  public home(url):any{
    this.router.navigate([url])
  }

  public back(url):any{
    this.router.navigate([url])
  }

  ngOnInit(): void {
  }

}
