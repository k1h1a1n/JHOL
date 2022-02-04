import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {
  data : any;

  constructor(private router:Router , public http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/getpolicy').subscribe(res => {
      this.data = res;
      console.log(this.data.recordset);
    },
      err => {
        console.log(err.error.message)
        console.log(err.status);
        
      })
  }
  }
