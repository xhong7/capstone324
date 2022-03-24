import { Component, OnInit } from '@angular/core';
import { SubmitAppService } from 'src/app/services/submit-app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private data:SubmitAppService) { }
public nav:any={
  item1:'Home',
  item2:'About',
  item3:'Sign Up',
  item4:'Log In'
}
theRole: any;
ngOnInit(): void {
}
ngDoCheck(): void {
   
    if(this.data.role=='applicant'){
      this.nav.item4='Log Out';
      this.nav.item2='Applicant Profile';
      this.nav.item3='';
      this.theRole = 'applicant';

    }
    if(this.data.role=='manager'){
      this.nav.item4='Log Out'
      this.nav.item2='Company Profile'
      this.nav.item3='';
      this.theRole = 'manager';
    }
    if(this.data.role=='recruiter'){
      this.nav.item4='Log Out'
      this.theRole = 'recruiter';

    }
    if(this.data.role==''){
      
      this.nav.item2='';
      this.nav.item3='Sign Up';
      this.nav.item4='Log In';
   
    }
  }
  ifLogin(){
    if(this.data.role!==''){
      this.data.role='';
      
    };
    
  }

}
