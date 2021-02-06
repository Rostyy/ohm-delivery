import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ohm } from 'src/app/models/ohm.model';
import { OhmService } from 'src/app/services/ohm.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  errorMessage: string;
  form: FormGroup;
  data: Ohm;
  get trackingId(): any { return this.form.get('trackingId'); }

  constructor(private ohmService: OhmService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      trackingId: [null, [Validators.required]]
    });
  }

  getOhmById(): void {
    this.errorMessage = '';
    this.ohmService.getOhmById(this.trackingId.value)
      .subscribe((data: Ohm) => {
        if (!data) {
          this.errorMessage = 'We don\'t have data with this id';
          return;
        }
        this.data = data;
      }, (err: HttpErrorResponse) => {
        this.errorMessage = 'Oops, this website is under construction, please come back later.';
      });
  }

}
