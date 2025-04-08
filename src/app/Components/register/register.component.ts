import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../../Services/HttpService/http.service';
import { profile } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  Day:Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  Month:Array<string> = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  Year:Array<number> = [2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001];
  Salary:Array<number> = [50000,60000,70000,80000,90000,100000];
  registerForm !:FormGroup;
  constructor(private http:HttpService,private formbuilder:FormBuilder,private router:Router) { }
  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
    name:[''],
    profile:[''],
    gender:[''],
    salary:[''],
    day:[''],
    month:[''],
    year:[''],
    note:[''],
    department:['']
  })
}
  
  onSubmit() {
    const monthMap: any = {
      Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
      Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
    };
  
    const day = String(this.registerForm.value.day).padStart(2, '0');
    const month = monthMap[this.registerForm.value.month];
    const year = this.registerForm.value.year;
  
    const formattedDate = `${year}-${month}-${day}T00:00:00`;
    let reqData = {
      name: this.registerForm.value.name.trim(),
      image: this.registerForm.value.profile,
      gender:this.registerForm.value.gender,
      salary: this.registerForm.value.salary, 
      date: formattedDate,
      notes: this.registerForm.value.note.trim(),
      department: this.registerForm.value.department
    };
    console.log(reqData);
    this.http.postService('http://localhost:5045/api/Employee',reqData).subscribe((res:any)=>{
      console.log(res);
      this.registerForm.reset();
    },(err:any)=>{
      console.log(err);
      alert("Error Occured")
    });
  }
  navigateToDashboard() {
    this.router.navigate(['/']);
  }

}
