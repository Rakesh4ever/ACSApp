import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condor',
  templateUrl: './condor.component.html',
  styleUrls: ['./condor.component.css']
})
export class CondorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {}
  
  public technologies =[
    { tid:1, coursename:"Condor Module 1",trainer:"Rakesh"},
    { tid:2, coursename:"Condor Module 2",trainer:"Sourav"},
    { tid:3, coursename:"Condor Module 3",trainer:"Kaustav"},
    { tid:4, coursename:"Condor Module 4",trainer:"Rakesh"},
    { tid:5, coursename:"Condor Module 5",trainer:"Deepa"}
    
   ];

   onSelect(technology:any){
    let tid=technology.tid;
    this.router.navigate(["coursedetails",tid])
   
  }

}
