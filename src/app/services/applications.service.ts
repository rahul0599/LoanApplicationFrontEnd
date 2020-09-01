import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  url:string = 'http://localhost:8080/';
  constructor(public _httpClient:HttpClient) { }

  public getApplicants():any{
    return this._httpClient.get(this.url+"all-app");
  }

  public getById(id:number):any{
    return this._httpClient.get(this.url+"getById/"+id);
  }
  
  public postData(userData):any{
    return this._httpClient.post("http://localhost:8080/save-loan", userData, {responseType : "text" as "json"});
  }
}
