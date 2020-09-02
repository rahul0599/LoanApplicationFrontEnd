import { Component, OnInit } from '@angular/core';
import {ApplicationsService} from '../../services/applications.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view-app-details',
  templateUrl: './view-app-details.component.html',
  styleUrls: ['./view-app-details.component.css']
})
export class ViewAppDetailsComponent implements OnInit {

  public sub:any;
  public id:any;
  public app:any;
  constructor(public _service:ApplicationsService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.id = +params['id'] || 0;

        console.log('Query param id: ', this.id);
      });
    this._service.getById(this.id).subscribe(res=>{
    this.app = res;
    this.app.loanPurpose = this.app.loanPurpose.replace(/_/g, " ");
    })
  }

  public home(url):any{
    this.router.navigate([url])
  }

  public back(url):any{
    this.router.navigate([url])
  }
}
