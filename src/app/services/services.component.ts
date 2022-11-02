import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Posts } from './posts';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private http:HttpClient) { }
  allPosts:Posts[]=[];  
  getAllPosts():Observable<Posts[]>
  {
    const url='https://jsonplaceholder.typicode.com/posts';
    return this.http.get<Posts[]>(url);
  }


  ngOnInit(): void {
    this.getAllPosts().subscribe(data=>this.allPosts=data);
  }

}
