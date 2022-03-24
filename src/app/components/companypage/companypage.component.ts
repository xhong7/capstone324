import { Component, OnInit } from '@angular/core';
import { SubmitAppService } from 'src/app/services/submit-app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-companypage',
  templateUrl: './companypage.component.html',
  styleUrls: ['./companypage.component.css']
})
export class CompanypageComponent implements OnInit {
  thePage: any={
    company_name:'',
    company_desc:'',
    company_website:'',
    company_email:'',
    company_address:'',
    company_logo:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    company_mission:''

  };

  theLogoId: any;
  theLogo: any;
  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router) {  }

  ngOnInit(): void {
    if(this.data.company_id){
      
      this.data.get_company_by_id(this.data.company_id).subscribe(info =>
        {
          console.log(this.data.company_id);
          console.log(info);
          if(info){
            this.thePage = info;
            this.data.company=info;
            if (info.company_document)
            {
              this.theLogoId = info.company_document;
              console.log(this.theLogoId);
              this.theLogo = "https://g13jobapiv2.herokuapp.com/api/document/company/" + this.data.company_id + "/" + this.theLogoId;
            }
          }
        });
    }
  }

  uploadLogo()
  {

    this.router.navigate(['/logo']);
    //this.ngOnInit();
  }

  addManager()
  {
    this.router.navigate(['/addmanager']);
  }

  redirectJobs()
  {
    this.router.navigate(['/jobpostings']);
  }

  addJob()
  {
    this.data.post='';
    this.router.navigate(['/jobform']);
  }

  ngOnDestroy()
  {
  }
}
