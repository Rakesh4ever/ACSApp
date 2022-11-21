export class CustomerRequest{
    public customerName:string='';
    public age:number=0;
    public yearlyIncome:string='';
    public cibilScore:string='';
    public employmentMode:string=''
}


export class CustomerResponse{
    public isEligible!: boolean;
    public approvedAmount:number=0;
    public criteriaMismatch!: string[];

}

//let fruits: string[] = ['Apple', 'Orange', 'Banana'];
