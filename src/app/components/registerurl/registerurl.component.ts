import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AvanceService } from 'src/app/service/avance.service';
@Component({
  selector: 'app-registerurl',
  templateUrl: './registerurl.component.html',
  styleUrls: ['./registerurl.component.css']
})
export class RegisterurlComponent implements OnInit {
  form: any = FormGroup;
  submitted = false;
  datarr: any = [] = [];
  message !: string;
  constructor(private formBuilder: FormBuilder, private service: AvanceService, private _router: Router) { }
  get f() { return this.form.controls; }
  ngOnInit(): void {

    this.list();
    this.form = this.formBuilder.group(
      {
        url: ['', [Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
        shortUrls: ['', Validators.required],
      });
  }

  list() {
    this.service.listurl().subscribe(
      ((response: any) => {
        this.datarr = response.data;
      })
    );
  }
  errmsg = '';
  onChange(event: any) {
    const val = event.target.value;
    this.service.duplicateUrl(this.form.value)
      .subscribe(
        (data: any) => {
          if (data.status == 'success') {
            this.errmsg = 'success';
          }
          else if (data.status == 'duplicate') {
            this.errmsg = 'duplicate'
            this.form.get("url").setValue("");
            this.message = data.message;
          }
          else {
            this.errmsg = 'error';
            this.message = 'error';
          }
        });
  }
  onSubmit() {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.service.saveUrl(this.form.value)
      .subscribe(
        (data: any) => {
          if (data.status == 'success') {
            this.errmsg = 'success';
            this.message = data.message;
            this.form.reset();
            this.list();
          }
          else {
            this.errmsg = 'error';
            this.message = 'Record Not Inserted';
          }
        }
      );
  }
  linkUrl(url: any) {
    // alert(this.dept);
    this.service.shortUrl(url).subscribe(
      (response: any) => {
        if (response.status == 'success') {
          window.open(url, "_blank");
        }
        else {
          this.message = 'Not Exists';
        }
      }
    )
  }
}
