import { Component, OnInit } from '@angular/core';
import { SubmitAppService } from 'src/app/services/submit-app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-companyform',
  templateUrl: './companyform.component.html',
  styleUrls: ['./companyform.component.css']
})
export class CompanyformComponent implements OnInit {
  public companyInfo:any={
    company_name:'',
    company_desc:'',
    company_website:'',
    company_email:'',
    company_address:'',
    company_mission:'',
    
  }
  querySub:any;

  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(this.data.company){
    this.companyInfo.company_name=this.data.company.company_name;
    this.companyInfo.company_desc=this.data.company.company_desc;
    this.companyInfo.company_website=this.data.company.company_website;
    this.companyInfo.company_email=this.data.company.company_email;
    this.companyInfo.company_address=this.data.company.company_address;
    this.companyInfo.company_mission=this.data.company.company_mission;
    }
  }

  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }

  doSubmit(){
    console.log(this.companyInfo);
    if (this.data.company)
    {
      this.data.update_company_page(this.companyInfo).subscribe(info =>
        {
          console.log("updated: " + info);
          this.router.navigate(['/home']);
        });
    }
    else
    {
      this.data.register_company_form(this.companyInfo).subscribe(info => 
        {
          console.log(info);
          this.data.company_id=info._id;
          this.router.navigate(['/home']);
        });
    }
  }
}
