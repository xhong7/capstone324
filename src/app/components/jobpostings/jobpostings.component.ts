import { Component, OnInit } from '@angular/core';
import { SubmitAppService } from 'src/app/services/submit-app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jobpostings',
  templateUrl: './jobpostings.component.html',
  styleUrls: ['./jobpostings.component.css']
})
export class JobpostingsComponent implements OnInit {

  manager: any;
  applicant: any;
  postings: any;
  jobExist: any;

  payDropdown = [
    { name: "All", value: "0" },
    { name: "$25000+", value: "25000" },
    { name: "$50000+", value: "50000" },
    { name: "$75000+", value: "75000" },
    { name: "$100000+", value: "100000" },
    { name: "$200000+", value: "200000" }
  ]
  thePay: Number;

  fieldDropdown = [
    { name: "All", value: "All" },
    { name: "IT", value: "IT" },
    { name: "Business", value: "Business" },
    { name: "Health", value: "Health" },
    { name: "Hospitality", value: "Hospitality" },
    { name: "Engineering", value: "Engineering" },
    { name: "Arts", value: "Arts" },
    { name: "Education", value: "Education" },
    { name: "Other", value: "Other" }
  ]
  theField: String;
  theTitle: any;

  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.manager = false;
    this.applicant = false;

    if (this.data.company_id) {
      this.manager = true;
    }
    else {
      this.applicant = true;
    }
    if (!this.data.company_id) {
      this.data.get_jobs().subscribe(info => {
        console.log(info);
        if (info.length == 0) {
          this.jobExist = false;
        }
        else {
          this.jobExist = true;
          this.postings = info;
        }

      })
    }
    else {
      this.data.get_jobsforCompany().subscribe(info => {
        console.log(info);
        if (info.job_postings.company_listings.length == 0) {
          this.jobExist = false;
        }
        else {
          this.jobExist = true;
          this.postings = info.job_postings.company_listings;
        }
      })

    }
    this.theField = "All"; //maybe change this
    this.thePay = 0; //maybe change this
    this.theTitle = ""; //maybe change this
  }

  doSubmit() {
    console.log(this.theTitle, this.theField, this.thePay);
    //add logic to filter
    //when fields are empty and search is clicked, return all jobs
    if (this.theField  !== "All" || this.thePay !== 0 || this.theTitle !== "") {
      let params = {
        
        
        
      }
      if(this.theTitle !== "") params['job_title']=this.theTitle;
      if(this.thePay !== 0)  params['job_pay']=this.thePay
      if(this.theField  !== "All") params['job_category']=this.theField;
      this.data.get_jobofCondition(params).subscribe(info => {
        console.log(info);
        if (info.jobs.length == 0) {
          this.jobExist = false;
          this.postings = info.jobs;
        }
        else {
          this.jobExist = true;
          this.postings = info.jobs;
        }
      })

    }
  }

}
