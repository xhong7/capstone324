import { Component, OnInit } from '@angular/core';
import { SubmitAppService } from 'src/app/services/submit-app.service';

@Component({
  selector: 'app-contentsection1',
  templateUrl: './contentsection1.component.html',
  styleUrls: ['./contentsection1.component.css']
})
export class Contentsection1Component implements OnInit {

  constructor(private data:SubmitAppService) { }
User:String;
  ngOnInit(): void {
this.User=this.data.email_address;
  }

}
