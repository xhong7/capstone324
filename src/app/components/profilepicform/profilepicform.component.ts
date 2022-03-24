import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubmitAppService } from 'src/app/services/submit-app.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-profilepicform',
  templateUrl: './profilepicform.component.html',
  styleUrls: ['./profilepicform.component.css']
})
export class ProfilepicformComponent implements OnInit {

  uploadForm: FormGroup;
  userId:any='';
  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group(
      {
        file: ['']
      }
    );
  }

  
  onFileSelect(event)
  {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('file').setValue(file);
    }
  }

  onSubmit()
  {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('file').value);

    this.data.upload_pic(formData).subscribe((info) =>
    {
      console.log(info);
    });
    
    this.router.navigate(['/home']);
  }

}
