import { Component, OnInit } from '@angular/core';
import { SubmitAppService } from 'src/app/services/submit-app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.component.html',
  styleUrls: ['./addmanager.component.css']
})
export class AddmanagerComponent implements OnInit {
  public newManager:any='';
  querySub:any;
  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }
  doSubmit()
  {
    console.log(this.newManager);
    this.data.newManager=this.newManager;
    this.querySub=this.data.add_manager(this.newManager).subscribe(
      (info)=>{
        console.log(info);
        this.router.navigate(['/home']);
      }


    )

  }
}
