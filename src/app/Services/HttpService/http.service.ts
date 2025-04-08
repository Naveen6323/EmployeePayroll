import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient:HttpClient) { }
  postService(reqUrl:string,reqData:any){
    return this.httpclient.post(reqUrl,reqData);
  }
  getService(reqUrl:string){
    return this.httpclient.get(reqUrl);
  }
}
