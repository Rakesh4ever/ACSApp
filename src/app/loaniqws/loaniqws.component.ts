import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import{CustomerRequest, CustomerResponse} from '../loaniqws/customerRequest'

@Component({
  selector: 'app-loaniqws',
  templateUrl: './loaniqws.component.html',
  styleUrls: ['./loaniqws.component.css']
})
export class LoaniqwsComponent implements OnInit {

  customerResponse!: CustomerResponse;
  customerResponses: CustomerResponse[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void { }
  
 onSubmit(data: any){
  console.warn(data)
  this.http.post('http://localhost:9090/getLoanStatus',data)
  .subscribe((result:any)=>{
    console.warn(result)
   // console.warn("results:"+result)
   this.customerResponses.push({ isEligible: result.isEligible, approvedAmount: result.approvedAmount,criteriaMismatch
:result.criteriaMismatch
});
  });
 }

}
