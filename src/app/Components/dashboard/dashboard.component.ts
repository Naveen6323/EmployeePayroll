import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../Services/HttpService/http.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  employees:any;
  constructor(private router:Router,private http:HttpService) { }

  ngOnInit(): void {
    this.getAll();
  }
  navigateToRegister() {
    this.router.navigate(['/reg']);
  }
  getAll(){
    this.http.getService('http://localhost:5045/api/Employee').subscribe((res:any)=>{
      console.log(res);
      this.employees = res;
    }
    ,(err:any)=>{
      console.log(err);
    })
  }
}


