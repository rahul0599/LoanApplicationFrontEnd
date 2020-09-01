import { Component, OnInit } from '@angular/core';
import { ApplicationsService} from '../../services/applications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-app-page',
  templateUrl: './view-app-page.component.html',
  styleUrls: ['./view-app-page.component.css']
})
export class ViewAppPageComponent implements OnInit {

  public applications:any;
  constructor(public _service:ApplicationsService, public router:Router) { }

  ngOnInit(): void {
    this._service.getApplicants().subscribe(response=>{
      this.applications = response;
    });
  }
  public onClick(url):any{
    this.router.navigate([url]);
  }

}
